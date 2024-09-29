## Features

- **Data Storage**: Uses Google Sheets API for storing and managing invitation data.
- **Responsive Design**: Optimized for various screen sizes.

## Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Google Sheets API](https://img.shields.io/badge/Google%20Sheets%20API-34A853?style=for-the-badge&logo=googlesheets&logoColor=white)
![AOS](https://img.shields.io/badge/AOS-Animate%20On%20Scroll-38B2AC?style=for-the-badge)

<hr/>

## How to Use

1. **Download the project or clone the repository**:
    ```bash
    git clone https://github.com/sandiperdiansah/wedding-invitation.git
    ```

2. **Note**: You have two options to use this source code:
    - **Without Modification**: Open the
      file [data.js](https://github.com/SandiPerdiansah/wedding-invitation/blob/main/src/assets/data/data.js) to use the
      code as is.
    - **With Customization**: Adjust the appearance and content according to your needs.

### How to Edit `data.js`

- **Details**: Update the names of the bride and groom, the wedding date and time, and the venue address.
- **Links**:
    - **Calendar**: Provide the URL for a Google Calendar event. Create an event, add the title and description, then
      save it. Click "Share" to get the shareable link.

  ![Event Creation](src/assets/images/readme1.png)
  ![Event Sharing](src/assets/images/readme2.png)
  ![Share Link](src/assets/images/readme3.png)

    - **Map**: Include the URL to the location on Google Maps.
- **Gallery**: You may include more than 5 images; just ensure they are optimized for web use.
- **Audio**: Replace default audio files and optimize their sizes.

### Setting Up Google Sheets API

1. **Create a Google Sheets file**: Open Google Sheets, create a new file, and name it accordingly.

![Spreadsheet Setup](src/assets/images/readme4.png)

2. **Adjust the Table in Your Sheets**:
   ![Spreadsheet Table](src/assets/images/readme5.png)
   The table consists of (id, name, status, message, date, color)

4. **Add Google Apps Script**:
    - Open the Google Sheets file, go to Extensions > Apps Script, and add the following code:

    ```javascript
    const SHEET_NAME = 'comentar';

    const doGet = () => {
      try {
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
        const [, ...data] = sheet.getDataRange().getValues();

        const comentar = data.map(([id, name, status, message, date, color]) => ({
          id,
          name,
          status,
          message,
          date,
          color
        }));

        const response = {
          status: 200,
          message: 'Success get services',
          comentar
        };

        return ContentService
          .createTextOutput(JSON.stringify(response))
          .setMimeType(ContentService.MimeType.JSON);
      } catch (error) {
        const errorMessage = {
          status: 500,
          message: `Error retrieving data: ${error}`
        };

        return ContentService
          .createTextOutput(JSON.stringify(errorMessage))
          .setMimeType(ContentService.MimeType.JSON);
      }
    };

    const doPost = (e) => {
      try {
        const { id, name, status, message, date, color } = JSON.parse(e.postData.contents);
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

        if (!sheet) {
          throw new Error(`Sheet "${SHEET_NAME}" not found`);
        }

        sheet.appendRow([id, name, status, message, date, color]);

        const response = {
          status: 200,
          message: 'Success add service'
        };

        return ContentService
          .createTextOutput(JSON.stringify(response))
          .setMimeType(ContentService.MimeType.JSON);
      } catch (error) {
        const errorMessage = {
          status: 500,
          message: `Error adding data: ${error}`
        };

        return ContentService
          .createTextOutput(JSON.stringify(errorMessage))
          .setMimeType(ContentService.MimeType.JSON);
      }
    };
    ```

5. **Deploy the Script**:
    - Click "Deploy" and select "New deployment".
    - Choose "Web app" in the deployment settings.

![Deploy](src/assets/images/readme8.png)
![Deployment Settings](src/assets/images/readme7.png)
![Deployment Setup](src/assets/images/readme6.png)

Copy the provided URL. If you encounter errors, redeploy as cross-origin issues may occur on the first attempt.

5. **Navbar Customization**: If you want to change the icons, adjust them as needed. Using the provided icons can
   simplify the process.

## Design Acknowledgment

This project redesigns the wedding invitation from [Dewanakl's GitHub repository](https://github.com/dewanakl). The design inspiration and layout have been adapted and customized to enhance functionality and aesthetics.

---

Thank you for visiting the repository. I hope your wedding day is smooth and filled with joy! 😊
