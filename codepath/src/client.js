import { createClient } from "@supabase/supabase-js";

const URL = "https://dapplrtqrumnzdesqwdh.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhcHBscnRxcnVtbnpkZXNxd2RoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwMTY3NDEsImV4cCI6MjA3MDU5Mjc0MX0.HSs4ztCmzgpIHAonAL9e0WE_wMxNRIo9lUj702ruY3E";

export const supabase = createClient(URL, API_KEY);
