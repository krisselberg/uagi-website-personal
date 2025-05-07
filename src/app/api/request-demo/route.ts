import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

const sheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
const calendlyUrl = 'https://calendly.com/universalagi/15min';
const serviceAccountEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;

function getAuth() {
  return new google.auth.JWT(
    process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    undefined,
    process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/spreadsheets']
  );
}

function formatDateForSheets(date: Date): string {
  const pad = (n: number) => n.toString().padStart(2, '0');
  return `${pad(date.getMonth() + 1)}/${pad(date.getDate())}/${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, company, title, message, source } = body;

    if (!firstName || !lastName || !email || !company || !title) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    if (!sheetId || !serviceAccountEmail || !privateKey) {
      return NextResponse.json({ success: true, calendly: calendlyUrl });
    }

    try {
      const auth = getAuth();
      const sheets = google.sheets({ version: 'v4', auth });
      const tabName = 'Demo Requests';
      const values = [[
        formatDateForSheets(new Date()),
        firstName,
        lastName,
        email,
        company,
        title,
        message || '',
        source || ''
      ]];
      try {
        await sheets.spreadsheets.values.append({
          spreadsheetId: sheetId,
          range: `${tabName}!A1`,
          valueInputOption: 'RAW',
          requestBody: { values },
        });
      } catch (err: any) {
        // If the tab doesn't exist, create it and add headers
        if (err.message?.includes('Unable to parse range')) {
          await sheets.spreadsheets.batchUpdate({
            spreadsheetId: sheetId,
            requestBody: {
              requests: [{
                addSheet: { properties: { title: tabName } }
              }]
            }
          });
          await sheets.spreadsheets.values.update({
            spreadsheetId: sheetId,
            range: `${tabName}!A1`,
            valueInputOption: 'RAW',
            requestBody: { values: [[
              'Timestamp', 'First Name', 'Last Name', 'Email', 'Company', 'Title', 'Message', 'How did you hear about us?'
            ]]}
          });
          await sheets.spreadsheets.values.append({
            spreadsheetId: sheetId,
            range: `${tabName}!A1`,
            valueInputOption: 'RAW',
            requestBody: { values },
          });
        } else {
          throw err;
        }
      }
    } catch (error) {
      console.error('Error logging to Google Sheet:', error);
    }
    // Always send Calendly link regardless of sheet logging result
    return NextResponse.json({ success: true, calendly: calendlyUrl });
  } catch (error: any) {
    console.error('Error processing request:', error);
    // Always send Calendly link even if something else fails
    return NextResponse.json({ success: true, calendly: calendlyUrl });
  }
} 