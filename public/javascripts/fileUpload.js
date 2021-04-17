FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode,
  )
  
  FilePond.setOptions({
    
    imageResizeTargetWidth: 800,
    imageResizeTargetHeight: 500
  })
  
  FilePond.parse(document.body);