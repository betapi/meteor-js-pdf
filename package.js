Package.describe({
  summary: "jsPdf packaged for meteor"
});

Package.on_use(function(api){

    // Client Files
    api.add_files([
      'lib/jspdf.js',
      'lib/jspdf.plugin.png_support.js'
    ], 'client');
    api.export("jsPDF", ['client', 'server']);
});
