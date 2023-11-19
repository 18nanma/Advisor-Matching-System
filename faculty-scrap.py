import requests
from bs4 import BeautifulSoup
import openpyxl

# Make a request to the website
response = requests.get('https://cs.illinois.edu/about/people/all-faculty')

# Check if the request was successful
if response.status_code == 200:
    # Parse the HTML response
    soup = BeautifulSoup(response.content, 'html.parser')

    # Create an Excel workbook and sheet
    workbook = openpyxl.Workbook()
    sheet = workbook.active
    sheet.title = 'Faculty Names and Titles'

    # Initialize row counter
    row_name = 1
    row_title = 3  # Start from the third row for titles

    # Get the names and titles from the website
    for name_div in soup.select('div[class*="name"]'):
        # Extract and clean up the name text
        name_text = name_div.get_text(strip=True)
        # Write the name to the first column (A) of the current row
        sheet[f'A{row_name}'] = name_text
        row_name += 1

    for title_div in soup.select('div[class*="title"]'):
        # Extract and clean up the title text
        title_text = title_div.get_text(strip=True)
        # Write the title to the second column (B) of the current row
        sheet[f'B{row_title}'] = title_text
        row_title += 1

    # Save the workbook
    excel_file_path = 'faculty_names_titles.xlsx'
    workbook.save(excel_file_path)
    print(f"Faculty names and titles have been saved to '{excel_file_path}'")
else:
    print(f"Failed to retrieve the webpage: Status code {response.status_code}")
