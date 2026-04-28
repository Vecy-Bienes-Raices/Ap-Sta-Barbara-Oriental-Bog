import os
from PIL import Image

def optimize_images(directory, quality=80, max_width=1600):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                file_path = os.path.join(root, file)
                try:
                    with Image.open(file_path) as img:
                        # Resize if too big
                        if img.width > max_width:
                            ratio = max_width / img.width
                            new_height = int(img.height * ratio)
                            img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                        
                        # Save with optimization
                        if file.lower().endswith('.png'):
                            img.save(file_path, optimize=True)
                        else:
                            img.save(file_path, quality=quality, optimize=True)
                        
                        print(f"Optimized: {file}")
                except Exception as e:
                    print(f"Error optimizing {file}: {e}")

if __name__ == "__main__":
    current_dir = os.path.dirname(os.path.abspath(__file__))
    assets_dir = os.path.join(current_dir, 'assets')
    if not os.path.exists(assets_dir):
        print(f"Error: No se encontró la carpeta {assets_dir}")
    else:
        print(f"Optimizando imágenes en {assets_dir}...")
        optimize_images(assets_dir)
        print("Optimización completada.")
