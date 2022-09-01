import requests
import feedparser
import string
import json
import os

#---------------------------------------
# Inititialize variables and lists
#---------------------------------------
rss_url_base = 'https://comicstripblog.com/feed/?paged='
total_pages = []

#---------------------------------------
# Function to get the number of pages 
# in the rss feed
#---------------------------------------
def get_total_rss_pages():
    i=1
    payload = requests.get(rss_url_base+str(i))
    while payload.status_code == requests.codes.ok:
        total_pages.append(i)
        i = i+1
        payload = requests.get(rss_url_base+str(i))
    return total_pages   

get_total_rss_pages()

#---------------------------------------
# Set a JSON directory and save JSON
# data to a file in that directory 
#---------------------------------------
def save_json_file(data):
    json_path = 'src/components'
    json_file_name = open(os.path.join(json_path, "comics.json"), "w")
    json_file_name.write(data)
    json_file_name.close()

#---------------------------------------
# Function that checks if a file is in a 
# directory and if not, downloads the file
# and saves it to the specified directory 
#---------------------------------------
def download_image(image_url, file_name):
    images_directory = 'public/images'
    if os.path.isfile(str(images_directory)+file_name):
        return
    else:
        response = requests.get(image_url)
        with open(os.path.join(images_directory, file_name), "wb") as f:
            f.write(response.content)

#---------------------------------------
# Function to clean file name by striping
# out bad characters and spaces
#---------------------------------------
def clean_file_name(fugly):
    fugly = fugly.translate(str.maketrans('','',string.punctuation))
    fugly = fugly.replace(" ","")
    fugly = fugly.replace("...","")
    cleaned = fugly.encode('ascii', errors='ignore').strip().decode('ascii')
    return cleaned.lower()

#---------------------------------------
# Function to pull data from RSS XML and 
# create a JSON object with the data and
# then save the data in a JSON file.
# Function also downloads each image
#---------------------------------------
def get_images_and_json():
    i=1
    comic_list = []
    while (i<= 2): #To get all images use: i<= len(total_pages)
        xml_page = str(rss_url_base+str(i))
        parsed_xml = feedparser.parse(xml_page)
        for entry in parsed_xml.entries:
            title = entry.title
            image_url = entry.media_content[1].get('url')
            image_page = entry.id
            file_type = requests.head(image_url, allow_redirects=True).headers.get('content-type').split('/')[1]
            publish_date = entry.published
            comic_tags = [t['term'] for t in entry.tags[1:] if 'term' in t]
            comic_category = entry.tags[0]['term']
            file_name = clean_file_name(title)+'.'+file_type
            comic = {
                'title':title,
                'image-url':image_url,
                'category':comic_category,
                'tags':comic_tags,
                'wp-page':image_page,
                'date':publish_date,
                'extension':file_type,
                'filename':file_name
                }
            comic_list.append(comic)
            download_image(image_url, file_name)
        i = i+1
    comics_json = json.dumps(comic_list, indent=4)
    save_json_file(comics_json)

get_images_and_json()