# Product Images Upload Guide

## 📁 Folder Structure

This folder contains all product images organized by category:

```
frontend/public/images/products/
├── watches/          # Watch product images
├── wall-clocks/      # Wall clock product images
└── accessories/      # Accessory product images
```

## 📸 Image Requirements

### **File Format**
- **Recommended**: JPG or PNG
- **Quality**: High resolution for crisp display

### **Image Size**
- **Recommended**: 400x400px or larger
- **Aspect Ratio**: Square (1:1) works best
- **File Size**: Keep under 2MB for fast loading

### **Image Quality**
- **Background**: Clean, professional backgrounds
- **Lighting**: Well-lit, clear product photos
- **Focus**: Sharp, in-focus images
- **Style**: Consistent lighting and background across all images

## 📋 Naming Convention

### **Watches**
Upload your watch images as:
- `watch-1.jpg`
- `watch-2.jpg`
- `watch-3.jpg`
- ... up to `watch-30.jpg`

### **Wall Clocks**
Upload your wall clock images as:
- `clock-1.jpg`
- `clock-2.jpg`
- `clock-3.jpg`
- ... up to `clock-30.jpg`

### **Accessories**
Upload your accessory images as:
- `accessory-1.jpg`
- `accessory-2.jpg`
- `accessory-3.jpg`
- ... up to `accessory-30.jpg`

## 🚀 How to Upload

1. **Navigate to the appropriate folder**:
   - For watches: `frontend/public/images/products/watches/`
   - For wall clocks: `frontend/public/images/products/wall-clocks/`
   - For accessories: `frontend/public/images/products/accessories/`

2. **Upload your images** with the correct naming convention

3. **Run the seed script** to update the database:
   ```bash
   cd backend
   node scripts/seedDatabase.js
   ```

## ✅ Verification

After uploading images and running the seed script:
1. Start your frontend server: `npm start`
2. Check that images display correctly in your application
3. Verify that each product shows the correct image

## 🔧 Troubleshooting

### **Images not displaying?**
- Check file names match exactly (case-sensitive)
- Ensure images are in the correct folder
- Verify file extensions (.jpg, .png)
- Check browser console for 404 errors

### **Images look blurry?**
- Use higher resolution source images
- Ensure images are at least 400x400px
- Check image compression settings

### **Database not updated?**
- Run the seed script: `node scripts/seedDatabase.js`
- Check for any error messages in the console
- Verify MongoDB connection

## 📝 Notes

- Images are served directly from the frontend public folder
- No server restart needed after uploading images
- Database seed script must be run after adding new images
- All image paths in the database will be relative to the public folder
