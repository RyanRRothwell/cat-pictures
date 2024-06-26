async function loadImages() {
    const response = await fetch('https://devrrrcatpictures.blob.core.windows.net/images?restype=container&comp=list');
    const data = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, "text/xml");
    const blobs = xmlDoc.getElementsByTagName("Blob");
    const gallery = document.getElementById('gallery');
    
    for (let i = 0; i < blobs.length; i++) {
        const url = `https://devrrrcatpictures.blob.core.windows.net/images/${blobs[i].getElementsByTagName("Name")[0].textContent}`;
        const img = document.createElement('img');
        img.src = url;
        const container = document.createElement('div');
        container.className = 'image-container';
        container.appendChild(img);
        gallery.appendChild(container);
    }
}

loadImages();
