import os
import json


from selenium import webdriver 
from selenium.webdriver.common.by import By 
from selenium.webdriver.support.ui import WebDriverWait 
from selenium.webdriver.support import expected_conditions as EC 
from selenium.common.exceptions import TimeoutException

PROJECT_ROOT = os.path.abspath(os.path.dirname(__file__))
print(PROJECT_ROOT)

DRIVER_BIN = os.path.join(PROJECT_ROOT, "web-driver/chromedriver")
print(DRIVER_BIN)

option = webdriver.ChromeOptions()
option.add_argument(" — incognito")

browser = webdriver.Chrome(executable_path = DRIVER_BIN, chrome_options=option)

browser.get("https://atlas-kibana.mwt2.org:5601/s/networking/app/kibana#/discover?_g=()&_a=(columns:!(timestamp,hops,dest_host,src_host),index:'45542740-0065-11e8-8f2f-ab6704660c79',interval:auto,query:(language:lucene,query:''),sort:!(timestamp,desc))")


# timeout = 20
# try:
#     WebDriverWait(browser, timeout).until(EC.visibility_of_element_located((By.XPATH, "//section[@class=’dscTable']")))
    
# except TimeoutException:
#     print("Timed out waiting for page to load")
#     browser.quit()


# packet_loss_table = browser.find_elements_by_xpath('//table[@class="kbn-table table"]')
data = browser.find_elements_by_xpath('//tbody')
# with open('data/cached_data.json','w', encoding = 'utf-8') as f:
#     json.dump(browser.page_source, f)


