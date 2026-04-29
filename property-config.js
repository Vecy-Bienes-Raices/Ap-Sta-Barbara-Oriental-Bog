/**
 * 🌍 CONFIGURACIÓN UNIVERSAL VECY - PLANTILLA MAESTRA (LIMPIA)
 * 
 * INSTRUCCIONES:
 * No editar esta plantilla directamente si desea crear un nuevo inmueble.
 * Use el script 'generator_vecy.py' para generar una nueva ficha.
 */

const propertyConfig = {
  // 1. SEO (Para Google y compartir en redes)
  seo: {
    title: "Apartamento en Venta para Estrenar en Santa Bárbara, Bogotá",
    description: "Impresionante apartamento de 116m², 3 habitaciones, 3 baños, cocina abierta, balcón y la mejor vista a los cerros orientales en Santa Bárbara. ¡Una oportunidad única!",
    keywords: "VentaApartamentosBogota, ApartamentoEnSantaBarbara, InmobiliariaBogota, BienesRaicesColombia, Usaquen, InversionInmobiliaria, VecyBienesRaices, CerrosOrientales, ViviendaPremiumBogota",
    propertyId: "ID-BOG-SB01",
    ogUrl: "https://ap-sta-barbara-oriental-bog.netlify.app/",
    ogImage: "assets/portada_ap_sta_barbara_oriental.png",
    author: "Vecy Bienes Raíces",
    copyright: "2026"
  },
  
  // 2. Encabezado Principal
  infoPrincipal: {
    headerBadge: "🚀 ¡Para Estrenar en Santa Bárbara! 🏢",
    tituloHtml: "Impresionante Apartamento con Vista a Cerros Orientales",
    precioVenta: "$1.170.000.000",
    valorAdmin: "Consultar",
    labelExtra: "✨ Ubicación Premium"
  },

  // 3. Rejilla de Detalles (Iconos y Datos Clave)
  detalles: [
    { label: "Área", value: "116 m²", icon: "📐" },
    { label: "Habitaciones", value: "3", icon: "🛏️" },
    { label: "Baños", value: "3", icon: "🚿" },
    { label: "Parqueaderos", value: "2 en línea", icon: "🚗" },
    { label: "Antigüedad", value: "Para estrenar", icon: "🏗️" },
    { label: "Piso", value: "8", icon: "🏢" },
    { label: "Depósito", value: "Interno", icon: "📦" },
    { label: "Gas", value: "100% Eléctrico", icon: "⚡" }
  ],

  // 4. Características Internas (Lista izquierda)
  caracteristicasInternas: [
    { name: "3 Habitaciones Amplias", emoji: "🛏️" },
    { name: "Principal con Walk-in Closet", emoji: "👗" },
    { name: "Cocina Abierta Moderna", emoji: "🍳" },
    { name: "Balcón con Vista al Oriente", emoji: "🌅" },
    { name: "Depósito dentro del Apto", emoji: "📦" },
    { name: "Sistema 100% Eléctrico", emoji: "⚡" },
    { name: "2 Calentadores de agua", emoji: "🚿" }
  ],
  destacadoInterno: "Un apartamento perfecto para quienes buscan <strong>comodidad, exclusividad</strong> y una vista única a los cerros en la ciudad.",

  // 5. Características Externas (Lista derecha)
  caracteristicasExternas: [
    { name: "Coworking (Home Office)", emoji: "💻" },
    { name: "Gimnasio Dotado", emoji: "🏋️‍♂️" },
    { name: "Zona Niños y Mascotas", emoji: "🐶" },
    { name: "Parqueadero Visitantes", emoji: "🚗" },
    { name: "Cerca a Unicentro", emoji: "🛍️" },
    { name: "Vías Principales Cerca", emoji: "📍" }
  ],
  destacadoUbicacion: "Ubicación estratégica en Santa Bárbara Oriental, garantizando estar <strong>cerca de todo:</strong> comercio, restaurantes y zonas verdes.",

  // 6. Mapa (Google Maps Embed)
  mapa: {
    urlEmbed: "https://maps.google.com/maps?ll=4.701744,-74.031611&t=&z=16&ie=UTF8&iwloc=&output=embed", 
    titulo: "Ubicación Santa Bárbara Oriental"
  },

  // 7. Descripción Final / Análisis de Inversión
  descripcionFinal: {
    titulo: "💖 Tu Próxima Gran Inversión",
    texto: `
    <div class="roi-item">
      <p>Vive en uno de los sectores más exclusivos y valorizados de Bogotá. Este moderno apartamento de 116 m² ubicado en octavo piso, te ofrece una vista privilegiada a los cerros orientales.</p>
      <ul class="roi-list">
        <li>✨ <strong>Edificio Top:</strong> Gimnasio completamente dotado, coworking ideal para home office, y zona para niños y mascotas.</li>
        <li>✨ <strong>Sistema Ecológico:</strong> Olvida el gas, vive en un sistema 100% eléctrico.</li>
        <li>✨ <strong>Ubicación Premium:</strong> En el corazón de Usaquén, cerca a Unicentro y Hacienda Santa Bárbara.</li>
      </ul>
      <div class="projection">
        ¡Una oportunidad única de inversión por 1.170 millones COP! No dejes que te lo ganen.
      </div>
      <br>
      <div style="text-align: center;">
         <a href="ficha-tecnica.html" class="btn-analisis">
            📋 VER MÁS DETALLES
         </a>
      </div>
    </div>`
  },

  // 8. Multimedia (Fotos y Video)
  multimedia: {
    videoUrl: "assets/ap_sta_barbara_bog.mp4",
    videoThumbnail: "assets/portada_ap_sta_barbara_oriental.png",
    imagesCount: 11,
    imagePrefix: "assets/",
    imageExtension: ".jpeg",
    imagesList: [
        "assets/1.jpeg",
        "assets/2.jpeg",
        "assets/3.jpeg",
        "assets/4.jpeg",
        "assets/5.jpeg",
        "assets/6.jpeg",
        "assets/7.jpeg",
        "assets/8.jpeg",
        "assets/9.jpeg",
        "assets/10.jpeg",
        "assets/11.jpeg"
    ]
  },

  // 9. Botón Compartir (Texto de WhatsApp)
  share: {
    whatsappText: `🏡 *APARTAMENTO EN VENTA - SANTA BÁRBARA ORIENTAL*
    
💰 *Precio:* $1.170.000.000
📐 *Área:* 116 m²
🛏️ *Habitaciones:* 3
📍 *Ubicación:* Santa Bárbara Oriental, Bogotá

🔗 *Ver Fotos y Detalles:*
https://ap-sta-barbara-oriental-bog.netlify.app/

#InmobiliariaBogota #BienesRaicesBogota #SantaBarbara #ApartamentoEnVenta #VecyBienesRaices #Usaquen #CerrosOrientales`
  }
};

