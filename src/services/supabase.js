
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://fljdsdphxduewgkxokmi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsamRzZHBoeGR1ZXdna3hva21pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY0MTE5NDcsImV4cCI6MjA5MTk4Nzk0N30.0DzpliWKEfbQjfNDH8xvuOxl4_a5Z0ixfW0a4Xr9USE';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;