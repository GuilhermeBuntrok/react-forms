import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://ykmlqtlnudjmeigoyjal.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlrbWxxdGxudWRqbWVpZ295amFsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MTI0MDMyNywiZXhwIjoxOTk2ODE2MzI3fQ.xZmw_unTcGcuoIfMv-gyBRMMgBsCeFO8GNh8Lt_0W7I')