Package.describe({
  summary: "jsPdf packaged for meteor"
});

Package.on_use(function(api){

    // Client Files
    api.add_files([
      'client/lib/jspdf.js',
      'client/lib/jspdf.plugin.png_support.js'
    ], 'client');
}
