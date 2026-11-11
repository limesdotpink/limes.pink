import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServerKey = process.env.SUPABASE_SERVICE_KEY || '';

let supabase;
if (supabaseUrl && supabaseServerKey) {
	supabase = createClient(supabaseUrl, supabaseServerKey);
}

export { supabase };
