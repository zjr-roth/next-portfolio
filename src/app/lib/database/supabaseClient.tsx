import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient("https://bxtqczklwnbyktqhyszg.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4dHFjemtsd25ieWt0cWh5c3pnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE5MjI3NzMsImV4cCI6MjAzNzQ5ODc3M30.HYtPlQwngZM8X97fDcexRytKKBZj4p5wXf1v9dSSLy8")

