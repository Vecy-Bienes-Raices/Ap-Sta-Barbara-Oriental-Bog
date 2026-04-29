import os
from PIL import Image

def optimize_og_image():
    current_dir = os.path.dirname(os.path.abspath(__file__))
    assets_dir = os.path.join(current_dir, 'assets')
    input_path = os.path.join(assets_dir, 'portada_ap_sta_barbara_oriental.png')
    output_path = os.path.join(assets_dir, 'portada_og.jpg')
    
    if not os.path.exists(input_path):
        print(f"Error: {input_path} no existe.")
        return

    try:
        with Image.open(input_path) as img:
            # Convert to RGB (required for JPEG)
            img = img.convert('RGB')
            # Resize to WhatsApp recommended 1200x630 (or similar aspect ratio)
            # Actually just resize to a width of 800px to ensure very small file size
            target_width = 800
            ratio = target_width / img.width
            new_height = int(img.height * ratio)
            img = img.resize((target_width, new_height), Image.Resampling.LANCZOS)
            
            # Save as highly compressed JPEG
            img.save(output_path, 'JPEG', quality=70, optimize=True)
            
            size_kb = os.path.getsize(output_path) / 1024
            print(f"Éxito: Creada {output_path} ({size_kb:.2f} KB)")
            
    except Exception as e:
        print(f"Error procesando imagen: {e}")

if __name__ == "__main__":
    optimize_og_image()
