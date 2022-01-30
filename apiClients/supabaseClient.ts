import { createClient, SupabaseRealtimePayload } from '@supabase/supabase-js';
import Message from '../entities/Message';

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzM3Mjk5NywiZXhwIjoxOTU4OTQ4OTk3fQ.3kJmcXVd45b06taP0gvHPvG5a2Zpd1hGzO4FYTRCfGc';
const URL = 'https://vwtnjatwggxihvrnntha.supabase.co';
const supabaseClient = createClient(URL, SUPABASE_ANON_KEY);

export const supabaseMessages = () => supabaseClient
  .from<Message>('messages')
  .select('*')
  .order('id', { ascending: false });

// eslint-disable-next-line max-len
export const supabaseMessagesSubscriber = (onAnySupabaseEvent: (message: Message) => void) => supabaseClient
  .from<Message>('messages')
  .on('*', (message) => {
    onAnySupabaseEvent(message.new);
  }).subscribe();

export const supabaseSendNewMessage = (message: Message) => supabaseClient
  .from<Message>('messages')
  .insert(message);
