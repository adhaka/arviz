(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("627baafd-cd33-45a0-93c8-6b21846eb933");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '627baafd-cd33-45a0-93c8-6b21846eb933' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js": "kLr4fYcqcSpbuI95brIH3vnnYCquzzSxHPU6XGQCIkQRGJwhg0StNbj1eegrHs12", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js": "xIGPmVtaOm+z0BqfSOMn4lOR6ciex448GIKG4eE61LsAvmGj48XcMQZtKcE/UXZe", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js": "Dc9u1wF/0zApGIWoBbH77iWEHtdmkuYWG839Uzmv8y8yBLXebjO9ZnERsde5Ln/P", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js": "cT9JaBz7GiRXdENrJLZNSC6eMNF3nh3fa5fTF51Svp+ukxPdwcU5kGXGPBgDCa2j"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{&quot;30fbf217-2933-4172-9903-4b974bf75eca&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;65439&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;65442&quot;},{&quot;id&quot;:&quot;65446&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;65443&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;65480&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;65486&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;65454&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;65431&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;65435&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;65433&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;65437&quot;}},&quot;id&quot;:&quot;65430&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65473&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65469&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65435&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65452&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65420&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65419&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65433&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;65479&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65492&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65406&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65472&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;65408&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;65411&quot;},{&quot;id&quot;:&quot;65415&quot;},{&quot;id&quot;:&quot;65475&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;65412&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;65464&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;65467&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;65423&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;65400&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;65404&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;65402&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;65406&quot;}},&quot;id&quot;:&quot;65399&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65431&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;65463&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65471&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65409&quot;}},&quot;id&quot;:&quot;65408&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65409&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;65462&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;65399&quot;},{&quot;id&quot;:&quot;65430&quot;}]},&quot;id&quot;:&quot;65482&quot;,&quot;type&quot;:&quot;Row&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65444&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65492&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65444&quot;}},&quot;id&quot;:&quot;65443&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65443&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;65446&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65494&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65440&quot;}},&quot;id&quot;:&quot;65439&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65413&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65448&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;65486&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65439&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;65442&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65417&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65447&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;Poisson&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;65464&quot;}]},&quot;id&quot;:&quot;65476&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;65453&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65404&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;65478&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65499&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65498&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;65453&quot;}},&quot;id&quot;:&quot;65449&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65412&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;65415&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;65422&quot;}},&quot;id&quot;:&quot;65418&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65469&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65413&quot;}},&quot;id&quot;:&quot;65412&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;EHaw6WzHBsA12T6WBpAGwFo8zUKgWAbAf59b7zkhBsCkAuqb0+kFwMpleEhtsgXA78gG9QZ7BcAULJWhoEMFwDmPI046DAXAXvKx+tPUBMCDVUCnbZ0EwKi4zlMHZgTAzRtdAKEuBMDyfuusOvcDwBjieVnUvwPAPUUIBm6IA8BiqJayB1EDwIcLJV+hGQPArG6zCzviAsDR0UG41KoCwPY00GRucwLAG5heEQg8AsBA++y9oQQCwGZee2o7zQHAisEJF9WVAcCwJJjDbl4BwNWHJnAIJwHA+uq0HKLvAMAfTkPJO7gAwESx0XXVgADAaRRgIm9JAMCOd+7OCBIAwGe1+fZEtf+/sXsWUHhG/7/8QTOpq9f+v0YIUALfaP6/kM5sWxL6/b/alIm0RYv9vyRbpg15HP2/byHDZqyt/L+559+/3z78vwOu/BgT0Pu/TXQZckZh+7+XOjbLefL6v+IAUyStg/q/LMdvfeAU+r92jYzWE6b5v8BTqS9HN/m/ChrGiHrI+L9V4OLhrVn4v5+m/zrh6ve/6WwclBR8978zMzntRw33v375VUZ7nva/yL9yn64v9r8Sho/44cD1v1xMrFEVUvW/phLJqkjj9L/x2OUDfHT0vzufAl2vBfS/hWUftuKW87/PKzwPFijzvxryWGhJufK/ZLh1wXxK8r+ufpIasNvxv/hEr3PjbPG/QgvMzBb+8L+N0eglSo/wv9eXBX99IPC/QrxEsGFj77/WSH5iyIXuv2zVtxQvqO2/AGLxxpXK7L+U7ip5/Ozrvyh7ZCtjD+u/vAee3ckx6r9QlNePMFTpv+QgEUKXdui/fK1K9P2Y578QOoSmZLvmv6TGvVjL3eW/OFP3CjIA5b/M3zC9mCLkv2Bsam//ROO/9PijIWZn4r+Ihd3TzInhvxwSF4YzrOC/aD2hcDSd37+QVhTVAeLdv7hvhznPJty/4Ij6nZxr2r8Iom0CarDYvzC74GY39da/WNRTywQ61b+A7cYv0n7Tv6gGOpSfw9G/0B+t+GwI0L8AckC6dJrMv1CkJoMPJMm/oNYMTKqtxb/wCPMURTfCv4B2sru/gb2/INt+TfWUtr+Af5a+VVCvv8BIL+LAdqG/AJBALmDpfL8AST6t0XiUP0BbBrP9Fag/AMm2R8n3sj9gZOq1k+S5P+D/DhKvaMA/kM0oSRTfwz9Am0KAeVXHP/BoXLfey8o/oDZ27kNCzj8gAsiSVNzQP/joVC6Hl9I/0M/hyblS1D+otm5l7A3WP4Cd+wAfydc/WISInFGE2T8waxU4hD/bPwhSotO2+tw/4Dgvb+m13j/YD14FjjjgP0SDJFMnFuE/sPbqoMDz4T8carHuWdHiP4jddzzzruM/9FA+ioyM5D9gxATYJWrlP8w3yyW/R+Y/OKuRc1gl5z+gHljB8QLoPwySHg+L4Og/eAXlXCS+6T/keKuqvZvqP1DscfhWees/vF84RvBW7D8o0/6TiTTtP5RGxeEiEu4/ALqLL7zv7j9oLVJ9Vc3vP2pQjGV3VfA/IIpvDETE8D/Ww1KzEDPxP4z9NVrdofE/QjcZAaoQ8j/4cPyndn/yP6yq305D7vI/ZOTC9Q9d8z8YHqac3MvzP9BXiUOpOvQ/hJFs6nWp9D88y0+RQhj1P/AEMzgPh/U/pD4W39v19T9cePmFqGT2PxCy3Cx10/Y/yOu/00FC9z98JaN6DrH3PzRfhiHbH/g/6JhpyKeO+D+g0kxvdP34P1QMMBZBbPk/CEYTvQ3b+T/Af/Zj2kn6P3S52QqnuPo/LPO8sXMn+z/gLKBYQJb7P5hmg/8MBfw/TKBmptlz/D8E2klNpuL8P7gTLfRyUf0/bE0Qmz/A/T8kh/NBDC/+P9jA1ujYnf4/kPq5j6UM/z9ENJ02cnv/P/xtgN0+6v8/2NMxwoUsAEC0cKMV7GMAQI4NFWlSmwBAaKqGvLjSAEBER/gPHwoBQB7kaWOFQQFA+oDbtut4AUDUHU0KUrABQLC6vl245wFAilcwsR4fAkBm9KEEhVYCQECRE1jrjQJAHC6Fq1HFAkD2yvb+t/wCQNBnaFIeNANArATapYRrA0CGoUv56qIDQGI+vUxR2gNAPNsuoLcRBEAZeKDzHUkEQA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]}},&quot;selected&quot;:{&quot;id&quot;:&quot;65499&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;65498&quot;}},&quot;id&quot;:&quot;65477&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65450&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;65467&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65471&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65421&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;65477&quot;}},&quot;id&quot;:&quot;65481&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;65422&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65402&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;65476&quot;}]},&quot;id&quot;:&quot;65475&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65400&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;65477&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;65478&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;65479&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;65481&quot;}},&quot;id&quot;:&quot;65480&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65416&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65494&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;65461&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;65462&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;65463&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;65465&quot;}},&quot;id&quot;:&quot;65464&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;65461&quot;}},&quot;id&quot;:&quot;65465&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65408&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;65411&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;65447&quot;},{&quot;id&quot;:&quot;65448&quot;},{&quot;id&quot;:&quot;65449&quot;},{&quot;id&quot;:&quot;65450&quot;},{&quot;id&quot;:&quot;65451&quot;},{&quot;id&quot;:&quot;65452&quot;}]},&quot;id&quot;:&quot;65454&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;left&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12],&quot;right&quot;:[1,2,3,4,5,6,7,8,9,10,11,12,13],&quot;top&quot;:{&quot;__ndarray__&quot;:&quot;nMQgsHJokT8zMzMzMzOzPzvfT42XbsI/qvHSTWIQyD/l0CLb+X7KPx+F61G4HsU/cT0K16NwvT9KDAIrhxapP3sUrkfhepQ/O99PjZdugj956SYxCKx8P/yp8dJNYmA//Knx0k1iYD8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[13]}},&quot;selected&quot;:{&quot;id&quot;:&quot;65473&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;65472&quot;}},&quot;id&quot;:&quot;65461&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65437&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65440&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65451&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;65416&quot;},{&quot;id&quot;:&quot;65417&quot;},{&quot;id&quot;:&quot;65418&quot;},{&quot;id&quot;:&quot;65419&quot;},{&quot;id&quot;:&quot;65420&quot;},{&quot;id&quot;:&quot;65421&quot;}]},&quot;id&quot;:&quot;65423&quot;,&quot;type&quot;:&quot;Toolbar&quot;}],&quot;root_ids&quot;:[&quot;65482&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"30fbf217-2933-4172-9903-4b974bf75eca","root_ids":["65482"],"roots":{"65482":"627baafd-cd33-45a0-93c8-6b21846eb933"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();