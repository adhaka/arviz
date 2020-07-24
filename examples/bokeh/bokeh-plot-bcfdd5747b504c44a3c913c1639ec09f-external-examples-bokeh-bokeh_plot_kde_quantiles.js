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
    
      
      
    
      var element = document.getElementById("b8340c7a-dcb5-48f7-9a45-c03d04055962");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b8340c7a-dcb5-48f7-9a45-c03d04055962' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;649146fc-82ac-49bb-864c-1901de23a12f&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67864&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67810&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67808&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67840&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67862&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67820&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;0azVo15byD/lZu98DdfIP/kgCVa8Usk/DdsiL2vOyT8glTwIGkrKPzRPVuHIxco/SAlwundByz9cw4mTJr3LP3B9o2zVOMw/hDe9RYS0zD+Y8dYeMzDNP6yr8Pfhq80/v2UK0ZAnzj/THySqP6POP+fZPYPuHs8/+5NXXJ2azz8Hp7gaJgvQPxGERYf9SNA/G2HS89SG0D8lPl9grMTQPy8b7MyDAtE/Ofh4OVtA0T9D1QWmMn7RP02ykhIKvNE/V48ff+H50T9hbKzruDfSP2tJOViQddI/dCbGxGez0j9+A1MxP/HSP4jg350WL9M/kr1sCu5s0z+cmvl2xarTP6Z3huOc6NM/sFQTUHQm1D+6MaC8S2TUP8QOLSkjotQ/zuu5lfrf1D/YyEYC0h3VP+Kl026pW9U/7IJg24CZ1T/2X+1HWNfVPwA9erQvFdY/ChoHIQdT1j8U95ON3pDWPx7UIPq1ztY/KLGtZo0M1z8yjjrTZErXPztrxz88iNc/RUhUrBPG1z9PJeEY6wPYP1kCboXCQdg/Y9/68Zl/2D9tvIdecb3YP3eZFMtI+9g/gHahNyA52T+KUy6k93bZP5QwuxDPtNk/ng1Ifaby2T+o6tTpfTDaP7LHYVZVbto/vKTuwiys2j/GgXsvBOraP9BeCJzbJ9s/2juVCLNl2z/kGCJ1iqPbP+71ruFh4ds/+NI7Tjkf3D8CsMi6EF3cPwyNVSfomtw/Fmrik7/Y3D8gR28AlxbdPyok/GxuVN0/NAGJ2UWS3T8+3hVGHdDdP0i7orL0Dd4/UpgvH8xL3j9cdbyLo4neP2ZSSfh6x94/cC/WZFIF3z94DGPRKUPfP4Lp7z0Bgd8/gunvPQGB3z+C6e89AYHfP3gMY9EpQ98/cC/WZFIF3z9mUkn4esfeP1x1vIujid4/UpgvH8xL3j9Iu6Ky9A3ePz7eFUYd0N0/NAGJ2UWS3T8qJPxsblTdPyBHbwCXFt0/Fmrik7/Y3D8MjVUn6JrcPwKwyLoQXdw/+NI7Tjkf3D/u9a7hYeHbP+QYInWKo9s/2juVCLNl2z/QXgic2yfbP8aBey8E6to/vKTuwiys2j+yx2FWVW7aP6jq1Ol9MNo/ng1Ifaby2T+UMLsQz7TZP4pTLqT3dtk/gHahNyA52T93mRTLSPvYP228h15xvdg/Y9/68Zl/2D9ZAm6FwkHYP08l4RjrA9g/RUhUrBPG1z87a8c/PIjXPzKOOtNkStc/KLGtZo0M1z8e1CD6tc7WPxT3k43ekNY/ChoHIQdT1j8APXq0LxXWP/Zf7UdY19U/7IJg24CZ1T/ipdNuqVvVP9jIRgLSHdU/zuu5lfrf1D/EDi0pI6LUP7oxoLxLZNQ/sFQTUHQm1D+md4bjnOjTP5ya+XbFqtM/kr1sCu5s0z+I4N+dFi/TP34DUzE/8dI/dCbGxGez0j9rSTlYkHXSP2FsrOu4N9I/V48ff+H50T9NspISCrzRP0PVBaYyftE/Ofh4OVtA0T8vG+zMgwLRPyU+X2CsxNA/G2HS89SG0D8RhEWH/UjQPwenuBomC9A/+5NXXJ2azz/n2T2D7h7PP9MfJKo/o84/v2UK0ZAnzj+sq/D34avNP5jx1h4zMM0/hDe9RYS0zD9wfaNs1TjMP1zDiZMmvcs/SAlwundByz80T1bhyMXKPyCVPAgaSso/DdsiL2vOyT/5IAlWvFLJP+Vm73wN18g/0azVo15byD/RrNWjXlvIPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[164]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4zZXbV7B/z/jNldtXsH/P25vvJQ8Uf8/r72DsnXj/j/fvFjNanj+P19MnJnWCv4/wEvVWWOc/T/ewypIfyj9P6Dv0NBZr/w/z8VfZVgw/D9ZNEzob677P1YgazK4J/s/7LNUxhKZ+j/fx1Wb2QX6P6EAwftxbvk/kt/Bu+fZ+D/0R9Gnnz74P7Da4Sc0pfc/JVb/6Z0K9z/9iVh8vHH2PxYkIR/Z2vU/KMCbSZBG9T9vDE+QsrT0P0tyesG6I/Q/yf3NbGaU8z/1aFJYuwfzPyhPCL5Pe/I/62FXof3v8T8CX+MkL2XxP9FAlJZp2fA/j/ZDjLJL8D+IJwabVX3vPzEfv7o/Xu4/tx6iX9E17T8rqCbrGBDsP6WcX6VM5+o/b4YKEqe66T9k5zUDG4/oP+xSd/c9ZOc/9SPl8iQ+5j9hYjyFWB3lP6Os1/DEAOQ//E32Oabw4j8qMoNjcu3hPzP+nANw9+A/dlubgQgS4D+2vgtWMXTeP+hxgoNR6tw/s32IqFV/2z8gBQz+IS7aPzvkpJ1TBNk/gsG/udvz1z8V8d522fvWPz9bdF4HEtY/UDyVZGs21T9H5ekXeW3UP6Zh/kJFrtM/vtSghJP90j+ipriV+E3SP2ZeEpjkndE/lLQkG5jz0D8deA+Zn0nQPwGxNu3FVM8/ssRkLw8Zzj8YqIz5a+PMPwyJfbSHyss/dBb0iSG9yj+ZSADfF73JP+NJftrzzcg/d1N2Tkz2xz/qWcksiTTHP+X+YWRWisY/lT6D6yT6xT9VHR9eTX7FPxO4bXTYHsU/YM53mk7LxD8E3+goQYjEP1Qcy1P+VcQ/xbf7V8kvxD/ED8Ms1xjEP5PRcoZpAcQ//xwM+aP9wz8AAAAAAAAAAA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[164]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67866&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67865&quot;}},&quot;id&quot;:&quot;67839&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67841&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;67878&quot;},{&quot;id&quot;:&quot;67876&quot;}]},&quot;id&quot;:&quot;67879&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;67864&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;67813&quot;}},&quot;id&quot;:&quot;67812&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67839&quot;}},&quot;id&quot;:&quot;67843&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;jMZ8qti+3z+WowkXsPzfP1BAy8FDHeA/1a4ReC884D9aHVguG1vgP9+LnuQGeuA/ZPrkmvKY4D/paCtR3rfgP27XcQfK1uA/80W4vbX14D94tP5zoRThP/0iRSqNM+E/gpGL4HhS4T8HANKWZHHhP4xuGE1QkOE/Ed1eAzyv4T+WS6W5J87hPxu6628T7eE/oCgyJv8L4j8ll3jc6iriP6oFv5LWSeI/L3QFScJo4j+04kv/rYfiPzlRkrWZpuI/vr/Ya4XF4j9DLh8iceTiP8ecZdhcA+M/TAusjkgi4z9MC6yOSCLjP0wLrI5IIuM/x5xl2FwD4z9DLh8iceTiP76/2GuFxeI/OVGStZmm4j+04kv/rYfiPy90BUnCaOI/qgW/ktZJ4j8ll3jc6iriP6AoMib/C+I/G7rrbxPt4T+WS6W5J87hPxHdXgM8r+E/jG4YTVCQ4T8HANKWZHHhP4KRi+B4UuE//SJFKo0z4T94tP5zoRThP/NFuL219eA/btdxB8rW4D/paCtR3rfgP2T65JrymOA/34ue5AZ64D9aHVguG1vgP9WuEXgvPOA/UEDLwUMd4D+WowkXsPzfP4zGfKrYvt8/jMZ8qti+3z8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[58]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzgJT1oMgEQHOAlPWgyARACohNtea0BECtiDL4XaMEQPkQUY99kARAHx+/16J9BEBCbgQw1WkEQEQpF3kFVARAgHjMtQs9BEDKz1PIeyMEQHIQuZxoBgRArFUMH9XlA0CuozJmNMMDQKKuFCZamgNAxjT1OSVuA0BieT3r+z4DQNVQ7G2NCwNAQ/OWXi3UAkAc7yrhnJcCQDPXbvU6WAJAkZy9n18YAkDG9RdusdQBQItXlPYXkwFAAgSBf9hQAUAyrZWz0g0BQJHPGth4zgBAwQnxwQqPAEC9oZbJ41IAQAkntuuJGQBAAAAAAAAAAAA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[58]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67868&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67867&quot;}},&quot;id&quot;:&quot;67844&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67871&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67839&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67840&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67841&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67843&quot;}},&quot;id&quot;:&quot;67842&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67845&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;toolbars&quot;:[{&quot;id&quot;:&quot;67830&quot;}],&quot;tools&quot;:[{&quot;id&quot;:&quot;67820&quot;},{&quot;id&quot;:&quot;67821&quot;},{&quot;id&quot;:&quot;67822&quot;},{&quot;id&quot;:&quot;67823&quot;},{&quot;id&quot;:&quot;67824&quot;},{&quot;id&quot;:&quot;67825&quot;},{&quot;id&quot;:&quot;67826&quot;},{&quot;id&quot;:&quot;67827&quot;}]},&quot;id&quot;:&quot;67877&quot;,&quot;type&quot;:&quot;ProxyToolbar&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;67828&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;0XnyRDRB4z9W6Dj7H2DjP9tWf7ELf+M/YMXFZ/ed4z/lMwwe47zjP2qiUtTO2+M/7xCZirr64z90f99AphnkP/ntJfeROOQ/flxsrX1X5D8Dy7JjaXbkP4g5+RlVleQ/Dag/0EC05D+SFoaGLNPkPxeFzDwY8uQ/nPMS8wMR5T8hYlmp7y/lP6bQn1/bTuU/Kz/mFcdt5T+wrSzMsozlPzUcc4Keq+U/uoq5OIrK5T8/+f/udenlP8RnRqVhCOY/SNaMW00n5j9I1oxbTSfmP0jWjFtNJ+Y/xGdGpWEI5j8/+f/udenlP7qKuTiKyuU/NRxzgp6r5T+wrSzMsozlPys/5hXHbeU/ptCfX9tO5T8hYlmp7y/lP5zzEvMDEeU/F4XMPBjy5D+SFoaGLNPkPw2oP9BAtOQ/iDn5GVWV5D8Dy7JjaXbkP35cbK19V+Q/+e0l95E45D90f99AphnkP+8QmYq6+uM/aqJS1M7b4z/lMwwe47zjP2DFxWf3neM/21Z/sQt/4z9W6Dj7H2DjP9F58kQ0QeM/0XnyRDRB4z8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[52]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1tiurmL0DQDW2K6uYvQNAScaC1U8VBEDnUQeD3WYEQFSYM4N4sQRADVemXk71BECM9P980zEFQP5c6W3EZQVA34AMr0eNBUC61x/EGK4FQCCfrdwcxAVAV1S87N/SBUCQ32z8v9gFQAaNIxLo1wVA2IQlCXTOBUAnU482C78FQOTeh37ArAVAMzoaudSWBUA/C3s3DX8FQKO/w22GZQVA8g7bQ9RMBUDamuFuojMFQD7VmY/AGwVANpU18x4GBUB7+breBPEEQAG28ftG3ARAAAAAAAAAAAA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[52]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67870&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67869&quot;}},&quot;id&quot;:&quot;67849&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67872&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67846&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67844&quot;}},&quot;id&quot;:&quot;67848&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67851&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67825&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[[{&quot;id&quot;:&quot;67803&quot;},0,0]]},&quot;id&quot;:&quot;67876&quot;,&quot;type&quot;:&quot;GridBox&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67849&quot;}},&quot;id&quot;:&quot;67853&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67844&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67845&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67846&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67848&quot;}},&quot;id&quot;:&quot;67847&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67813&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67826&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67823&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67806&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67850&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;67829&quot;}},&quot;id&quot;:&quot;67824&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;zUTTETlG5j9SsxnIJGXmP9chYH4QhOY/XJCmNPyi5j/h/uzq58HmP2ZtM6HT4OY/69t5V7//5j9wSsANqx7nP/W4BsSWPec/eidNeoJc5z//lZMwbnvnP4QE2uZZmuc/CXMgnUW55z+O4WZTMdjnPxNQrQkd9+c/mL7zvwgW6D8dLTp29DToP6KbgCzgU+g/JwrH4sty6D+seA2Zt5HoPzHnU0+jsOg/tlWaBY/P6D87xOC7eu7oP78yJ3JmDek/RKFtKFIs6T/JD7TePUvpP05++pQpauk/0+xASxWJ6T9YW4cBAajpP93Jzbfsxuk/YjgUbtjl6T/nplokxATqP2wVodqvI+o/8YPnkJtC6j928i1Hh2HqP/tgdP1ygOo/gM+6s16f6j8FPgFqSr7qP4qsRyA23eo/DxuO1iH86j+UidSMDRvrPxn4GkP5Oes/nmZh+eRY6z8j1aev0HfrP6hD7mW8lus/LbI0HKi16z+yIHvSk9TrPzePwYh/8+s/vP0HP2sS7D9BbE71VjHsP8balKtCUOw/SknbYS5v7D/PtyEYGo7sP1QmaM4Frew/2ZSuhPHL7D9eA/U63ersP+NxO/HICe0/aOCBp7Qo7T/tTshdoEftP3K9DhSMZu0/9ytVyneF7T98mpuAY6TtPwEJ4jZPw+0/hnco7Tri7T8L5m6jJgHuPwvmbqMmAe4/C+ZuoyYB7j+GdyjtOuLtPwEJ4jZPw+0/fJqbgGOk7T/3K1XKd4XtP3K9DhSMZu0/7U7IXaBH7T9o4IGntCjtP+NxO/HICe0/XgP1Ot3q7D/ZlK6E8cvsP1QmaM4Frew/z7chGBqO7D9KSdthLm/sP8balKtCUOw/QWxO9VYx7D+8/Qc/axLsPzePwYh/8+s/siB70pPU6z8tsjQcqLXrP6hD7mW8lus/I9Wnr9B36z+eZmH55FjrPxn4GkP5Oes/lInUjA0b6z8PG47WIfzqP4qsRyA23eo/BT4Bakq+6j+Az7qzXp/qP/tgdP1ygOo/dvItR4dh6j/xg+eQm0LqP2wVodqvI+o/56ZaJMQE6j9iOBRu2OXpP93Jzbfsxuk/WFuHAQGo6T/T7EBLFYnpP05++pQpauk/yQ+03j1L6T9EoW0oUizpP78yJ3JmDek/O8Tgu3ru6D+2VZoFj8/oPzHnU0+jsOg/rHgNmbeR6D8nCsfiy3LoP6KbgCzgU+g/HS06dvQ06D+YvvO/CBboPxNQrQkd9+c/juFmUzHY5z8JcyCdRbnnP4QE2uZZmuc//5WTMG575z96J016glznP/W4BsSWPec/cErADase5z/r23lXv//mP2ZtM6HT4OY/4f7s6ufB5j9ckKY0/KLmP9chYH4QhOY/UrMZyCRl5j/NRNMROUbmP81E0xE5RuY/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[132]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGQM8RMznL8/ZAzxEzOcvz/wMvKjrSPAP33AkXJ8o8A/OiekzpFCwT+MjeH5NQ/CP4kAjcdW+8I/1g2yWSoPxD/oW+iQYVrFP1HpM1V+2sY/uFOGtF6HyD9N80GX+FrKP1c8j6z+Y8w/8s0FyHudzj9aSJSbZY3QPwSjpri55tE/oJ62QjpX0z9RGMAKMeXUP+L2wkPRjdY/ArCbkHtL2D/P/cuekCXaP6x2fs/xF9w/vQ3Q6C4d3j9PK+dFShngP5l3VbmON+E/DXCD0M9c4j/E8wvFeJDjPwLGR6wEy+Q/c14IpZsQ5j8Q2lgG1lvnP5rp57VYtug/2Zt//98X6j/Xh5nlI4HrP7ETCpjI8+w/4zdBe3Fx7j+HrEAS9fDvPxp1/19cuvA/h5pm9ep88T/Pp2xHyEHyPwoRU8pSBPM/d4DGAdXF8z9hKuACkYb0P3zWi9y3RPU/VzMUOZ8D9j8lz6Aph7/2P7rzcCePevc/IituCQU2+D+G5kzF1/D4PzFeY9kdq/k/xiwzFXpl+j+07DWVPyL7P5AJ2Wpp3/s/MWGQaU+e/D9AWrhDpl/9P/s0QBnhJf4/tOVNFkLv/j+KgQ4+Orn/P0+QWcoZQQBAj7UOXtilAEDf1IZ9OAwBQEej0bTocgFAaGPe8iTYAUAddziuMz8CQMlqOE69oQJAdD9uT+0CA0Ccn44rDGMDQAAAAAAAAAAA&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[132]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67872&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67871&quot;}},&quot;id&quot;:&quot;67854&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67817&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67804&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67856&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67854&quot;}},&quot;id&quot;:&quot;67858&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67849&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67850&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67851&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67853&quot;}},&quot;id&quot;:&quot;67852&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;67812&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;67815&quot;},{&quot;id&quot;:&quot;67819&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;67816&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;67842&quot;},{&quot;id&quot;:&quot;67847&quot;},{&quot;id&quot;:&quot;67852&quot;},{&quot;id&quot;:&quot;67857&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;67860&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;67830&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;67804&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;67808&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;67806&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;67810&quot;}},&quot;id&quot;:&quot;67803&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67821&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;67829&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67865&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;67816&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;67819&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67855&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67867&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;toolbar&quot;:{&quot;id&quot;:&quot;67877&quot;},&quot;toolbar_location&quot;:&quot;above&quot;},&quot;id&quot;:&quot;67878&quot;,&quot;type&quot;:&quot;ToolbarBox&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;67828&quot;}},&quot;id&quot;:&quot;67822&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67866&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67868&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;67827&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;67820&quot;},{&quot;id&quot;:&quot;67821&quot;},{&quot;id&quot;:&quot;67822&quot;},{&quot;id&quot;:&quot;67823&quot;},{&quot;id&quot;:&quot;67824&quot;},{&quot;id&quot;:&quot;67825&quot;},{&quot;id&quot;:&quot;67826&quot;},{&quot;id&quot;:&quot;67827&quot;}]},&quot;id&quot;:&quot;67830&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;67812&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;67815&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67854&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67855&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67856&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67858&quot;}},&quot;id&quot;:&quot;67857&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;67862&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;67817&quot;}},&quot;id&quot;:&quot;67816&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;67860&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67869&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67870&quot;,&quot;type&quot;:&quot;Selection&quot;}],&quot;root_ids&quot;:[&quot;67879&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"649146fc-82ac-49bb-864c-1901de23a12f","root_ids":["67879"],"roots":{"67879":"b8340c7a-dcb5-48f7-9a45-c03d04055962"}}];
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