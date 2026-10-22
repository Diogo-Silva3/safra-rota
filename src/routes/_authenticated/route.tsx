import { createFileRoute, redirect, Outlet } from '@tanstack/react-router';
import { supabase } from '@/integrations/supabase/client';
export const Route=createFileRoute('/_authenticated')({ssr:false,beforeLoad:async()=>{const {data,error}=await supabase.auth.getUser();if(error||!data.user)throw redirect({to:'/auth'});const {data:profile}=await supabase.from('profiles').select('registered').eq('id',data.user.id).single();if(!profile?.registered)throw redirect({to:'/auth'});},component:()=> <Outlet/>});
