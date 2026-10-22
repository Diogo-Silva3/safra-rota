import { pgTable, uuid, text, bigint, timestamp, uniqueIndex, foreignKey, check } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

// Profiles table - stores user profile info
export const profiles = pgTable(
  "profiles",
  {
    id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
    displayName: text("display_name").notNull(),
    inviteCode: text("invite_code").notNull().unique(),
    referrerId: uuid("referrer_id"),
    registered: timestamp("registered", { withTimezone: true }).notNull().defaultNow(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => ({
    referrerFk: foreignKey({
      columns: [table.referrerId],
      foreignColumns: [table.id],
      name: "fk_referrer",
    }),
    inviteCodeIdx: uniqueIndex("idx_invite_code").on(table.inviteCode),
    referrerIdx: uniqueIndex("idx_referrer").on(table.referrerId),
  })
);

// Wallets table - stores virtual account balances
export const wallets = pgTable(
  "wallets",
  {
    userId: uuid("user_id").primaryKey(),
    balanceCents: bigint("balance_cents", { mode: "number" }).notNull().default(0),
  },
  (table) => ({
    balanceCheck: check("balance_check", sql`${table.balanceCents} >= 0`),
  })
);

// Plans table - investment plans offered
export const plans = pgTable("plans", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  destination: text("destination").notNull(),
  priceCents: bigint("price_cents", { mode: "number" }).notNull(),
  category: text("category").notNull(),
});

// Orders table - investment orders
export const orders = pgTable(
  "orders",
  {
    id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
    userId: uuid("user_id").notNull(),
    planId: text("plan_id").notNull(),
    priceCents: bigint("price_cents", { mode: "number" }).notNull(),
    status: text("status").notNull().default("pending"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    paidAt: timestamp("paid_at", { withTimezone: true }),
  },
  (table) => ({
    userFk: foreignKey({
      columns: [table.userId],
      foreignColumns: [profiles.id],
      name: "fk_order_user",
    }),
    planFk: foreignKey({
      columns: [table.planId],
      foreignColumns: [plans.id],
      name: "fk_order_plan",
    }),
  })
);

// Transactions table - transaction history
export const transactions = pgTable(
  "transactions",
  {
    id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
    userId: uuid("user_id").notNull(),
    orderId: uuid("order_id"),
    kind: text("kind").notNull(),
    amountCents: bigint("amount_cents", { mode: "number" }).notNull(),
    description: text("description"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => ({
    userFk: foreignKey({
      columns: [table.userId],
      foreignColumns: [profiles.id],
      name: "fk_transaction_user",
    }),
    orderFk: foreignKey({
      columns: [table.orderId],
      foreignColumns: [orders.id],
      name: "fk_transaction_order",
    }),
    ownerIdx: uniqueIndex("idx_transaction_owner").on(table.userId, table.createdAt),
  })
);
