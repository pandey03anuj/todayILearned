import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rzvvvgxttgixxbcztjwa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6dnZ2Z3h0dGdpeHhiY3p0andhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg0NTAyNTUsImV4cCI6MTk5NDAyNjI1NX0.Pmqrj8HmZNqyYMtD6frew59PA-hiM9_gzAFgcIWtRak";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
