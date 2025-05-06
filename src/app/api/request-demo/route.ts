import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

const sheetId = process.env.GOOGLE_SHEETS_ID;
const calendlyUrl = 'https://calendly.com/universalagi/15min';
const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const privateKey = process.env.GOOGLE_PRIVATE_KEY;

function getAuth() {
  return new google.auth.JWT(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    undefined,
    process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/spreadsheets']
  );
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, company, title, message } = body;

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
        new Date().toISOString(),
        firstName,
        lastName,
        email,
        company,
        title,
        message || ''
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
              'Timestamp', 'First Name', 'Last Name', 'Email', 'Company', 'Title', 'Message']
            ]}
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