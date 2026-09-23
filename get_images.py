import urllib.request
import re
import json

items = [
    'garlic bread', 'paneer tikka', 'french fries', 'tomato soup', 
    'veg biryani', 'pasta alfredo', 'margherita pizza', 'veggie burger', 
    'chocolate brownie', 'cheesecake', 'chocolate lava cake', 'ice cream sundae', 
    'cold coffee', 'fresh lime soda', 'mango shake', 'iced tea'
]

results = {}
for item in items:
    q = item.replace(' ', '-')
    url = f'https://unsplash.com/s/photos/{q}'
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            # Extract photo ID from <img src="https://images.unsplash.com/photo-ID...">
            match = re.search(r'images\.unsplash\.com/photo-([a-zA-Z0-9_-]+)\?', html)
            if match:
                results[item] = 'https://images.unsplash.com/photo-' + match.group(1) + '?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
            else:
                results[item] = 'Not found'
    except Exception as e:
        results[item] = str(e)
        
with open('images.json', 'w') as f:
    json.dump(results, f, indent=2)
print("Done")
