// Mock Supabase for demonstration
export const supabase = {
  auth: {
    getSession: async () => ({
      data: { session: null },
    }),
    getUser: async () => ({
      data: { user: null },
    }),
    onAuthStateChange: (callback: any) => ({
      data: {
        subscription: {
          unsubscribe: () => {},
        },
      },
    }),
    signUp: async (data: any) => ({
      data: { session: null, user: { id: 'demo', email: data.email } },
      error: null,
    }),
    signInWithPassword: async (data: any) => ({
      data: { session: { user: { id: 'demo', email: data.email } } },
      error: null,
    }),
    signOut: async () => ({ error: null }),
    resetPasswordForEmail: async () => ({ error: null }),
  },
  from: (table: string) => ({
    select: () => ({
      eq: () => ({
        single: async () => ({
          data: {
            id: 'demo',
            display_name: 'Demo User',
            invite_code: 'SAFRAROTA',
            registered: true,
            balance: 100000,
            profile: { display_name: 'Demo User' },
            plans: [],
            orders: [],
            network: [],
            transactions: [],
          },
          error: null,
        }),
      }),
    }),
    insert: async () => ({ data: null, error: null }),
    update: async () => ({ data: null, error: null }),
  }),
  rpc: async (fn: string, params: any) => ({
    data: null,
    error: null,
  }),
}
