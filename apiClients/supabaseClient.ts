import { createClient } from '@supabase/supabase-js';
import Message from '../entities/Message';

const SUPABASE_ANON_KEY = 'SUPABASE_ANON_KEY';
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
