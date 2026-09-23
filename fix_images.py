import re

replacements = {
    'Garlic Bread': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Garlicbread.jpg/500px-Garlicbread.jpg',
    'Paneer Tikka': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Paneer_tikka.jpg/500px-Paneer_tikka.jpg',
    'French Fries': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/French_Fries.JPG/500px-French_Fries.JPG',
    'Tomato Soup': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8c/Tomato_soup%2C_plant-based_%2844040252791%29.jpg/500px-Tomato_soup%2C_plant-based_%2844040252791%29.jpg',
    'Veg Biryani': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg/500px-%22Hyderabadi_Dum_Biryani%22.jpg',
    'Margherita Pizza': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Neapolitan_pizza_at_Trappica_%2848701940197%29.jpg/500px-Neapolitan_pizza_at_Trappica_%2848701940197%29.jpg',
    'Veggie Burger': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/%D7%94%D7%9E%D7%91%D7%95%D7%A8%D7%92%D7%A8_%D7%98%D7%91%D7%A2%D7%95%D7%A0%D7%99.jpg/500px-%D7%94%D7%9E%D7%91%D7%95%D7%A8%D7%92%D7%A8_%D7%98%D7%91%D7%A2%D7%95%D7%A0%D7%99.jpg',
    'Chocolate Brownie': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Chocolatebrownie.JPG/500px-Chocolatebrownie.JPG',
    'Cheesecake': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Baked_cheesecake_with_raspberries_and_blueberries.jpg/500px-Baked_cheesecake_with_raspberries_and_blueberries.jpg',
    'Chocolate Lava Cake': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Chocolate_Fondant.jpg/500px-Chocolate_Fondant.jpg',
    'Ice Cream Sundae': 'https://upload.wikimedia.org/wikipedia/commons/a/ae/StrawberrySundae.jpg',
    'Cold Coffee': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Affogato_al_Caffe.jpg/500px-Affogato_al_Caffe.jpg',
    'Fresh Lime Soda': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Mint_lemonade.jpg/500px-Mint_lemonade.jpg',
    'Iced Tea': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Iced_Tea_from_flickr.jpg/500px-Iced_Tea_from_flickr.jpg'
}

for filepath in ['menu.html', 'index.html', 'about.html']:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for alt_text, new_url in replacements.items():
        pattern = f'<img src="[^"]+" alt="{alt_text}">'
        replacement = f'<img src="{new_url}" alt="{alt_text}">'
        content = re.sub(pattern, replacement, content)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Images replaced.")
