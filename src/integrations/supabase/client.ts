import { createClient } from "@supabase/supabase-js";
import * as mockSupabase from "./mock";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Use mock mode for development/testing
// Set VITE_USE_REAL=true to use actual Supabase
const useRealSupabase = import.meta.env.VITE_USE_REAL === 'true' && supabaseUrl && supabaseAnonKey;

if (useRealSupabase && (!supabaseUrl || !supabaseAnonKey)) {
  console.error("VITE_USE_REAL=true but Supabase credentials missing!");
}

console.log(`[Supabase] Using ${useRealSupabase ? 'REAL' : 'MOCK'} mode`);

export const supabase = useRealSupabase 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : (mockSupabase.supabase as any);
