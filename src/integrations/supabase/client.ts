import { createClient } from "@supabase/supabase-js";
import * as mockSupabase from "./mock";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Use mock if Supabase not configured or if explicitly using demo mode
const useDemo = !supabaseUrl || !supabaseAnonKey || import.meta.env.VITE_USE_DEMO === 'true';

export const supabase = useDemo 
  ? (mockSupabase.supabase as any)
  : createClient(supabaseUrl, supabaseAnonKey);
