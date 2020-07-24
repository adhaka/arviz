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
    
      
      
    
      var element = document.getElementById("7d69098a-9bf0-49f5-b672-27fda147cbab");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '7d69098a-9bf0-49f5-b672-27fda147cbab' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;c6488266-d4ad-410e-a26e-47aa3c17c8ef&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66903&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66918&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;66939&quot;}},&quot;id&quot;:&quot;66943&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66901&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66950&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66941&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;66915&quot;},{&quot;id&quot;:&quot;66916&quot;},{&quot;id&quot;:&quot;66917&quot;},{&quot;id&quot;:&quot;66918&quot;},{&quot;id&quot;:&quot;66919&quot;},{&quot;id&quot;:&quot;66920&quot;},{&quot;id&quot;:&quot;66921&quot;},{&quot;id&quot;:&quot;66922&quot;}]},&quot;id&quot;:&quot;66925&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66951&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;66911&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;66914&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;66947&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;66912&quot;}},&quot;id&quot;:&quot;66911&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66921&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66899&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;66924&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66905&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;Km+nTH+MBMDM/oJCsXMEwBAeOi4VQgTAVD3xGXkQBMCYXKgF3d4DwNx7X/FArQPAIJsW3aR7A8Bkus3ICEoDwKjZhLRsGAPA7Pg7oNDmAsAwGPOLNLUCwHQ3qneYgwLAuFZhY/xRAsD9dRhPYCACwEGVzzrE7gHAhbSGJii9AcDJ0z0SjIsBwA3z9P3vWQHAURKs6VMoAcCVMWPVt/YAwNlQGsEbxQDAHXDRrH+TAMBhj4iY42EAwKWuP4RHMADA0pvt31b9/79a2lu3Hpr/v+IYyo7mNv+/alc4Zq7T/r/ylaY9dnD+v3rUFBU+Df6/AxOD7AWq/b+LUfHDzUb9vxOQX5uV4/y/m87Ncl2A/L8jDTxKJR38v6xLqiHtufu/NIoY+bRW+7+8yIbQfPP6v0QH9adEkPq/zEVjfwwt+r9UhNFW1Mn5v9zCPy6cZvm/ZAGuBWQD+b/sPxzdK6D4v3R+irTzPPi//Lz4i7vZ97+E+2Zjg3b3vww61TpLE/e/lHhDEhOw9r8dt7Hp2kz2v6X1H8Gi6fW/LTSOmGqG9b+1cvxvMiP1vz2xakf6v/S/xe/YHsJc9L9NLkf2ifnzv9Vstc1RlvO/XasjpRkz87/l6ZF84c/yv24oAFSpbPK/9mZuK3EJ8r9+pdwCOabxvwbkStoAQ/G/jiK5scjf8L8WYSeJkHzwv56flWBYGfC/TLwHcEBs779cOeQe0KXuv2y2wM1f3+2/fDOdfO8Y7b+OsHkrf1Lsv54tVtoOjOu/rqoyiZ7F6r++Jw84Lv/pv86k6+a9OOm/3iHIlU1y6L/unqRE3avnv/4bgfNs5ea/Dpldovwe5r8eFjpRjFjlvzCTFgAckuS/QBDzrqvL479Qjc9dOwXjv2AKrAzLPuK/cIeIu1p44b+ABGVq6rHgvyADgzL01t+/QP07kBNK3r9g9/TtMr3cv4DxrUtSMNu/oOtmqXGj2b/A5R8HkRbYv+Df2GSwida/ANqRws/81L8g1Eog72/Tv0DOA34O49G/YMi82y1W0L8QhetympLNv1B5XS7ZeMq/kG3P6Rdfx7/QYUGlVkXEvxBWs2CVK8G/oJRKOKgjvL8gfS6vJfC1v0DLJExGea+/QJzsOUESo78AtdGe8KyKvwAHD6oj74Y/wPC7/M0ioj/AH/QO04muP2AnlhBseLU/4D6yme6ruz8wK2eRuO/AP/A29dV5CcQ/sEKDGjsjxz9wThFf/DzKPzBan6O9Vs0/+LIWdD840D/QuF0WIMXRP7C+pLgAUtM/kMTrWuHe1D9wyjL9wWvWP1DQeZ+i+Nc/MNbAQYOF2T8Q3AfkYxLbP/DhToZEn9w/0OeVKCUs3j+w7dzKBbnfP8j5kTbzouA/uHy1h2Np4T+o/9jY0y/iP5iC/ClE9uI/iAUge7S84z94iEPMJIPkP2gLZx2VSeU/WI6KbgUQ5j9IEa6/ddbmPziU0RDmnOc/KBf1YVZj6D8UmhizxinpPwQdPAQ38Ok/9J9fVae26j/kIoOmF33rP9SlpveHQ+w/xCjKSPgJ7T+0q+2ZaNDtP6QuEevYlu4/lLE0PEld7z9CGqzG3BHwP7rbPe8UdfA/Mp3PF03Y8D+qXmFAhTvxPyIg82i9nvE/muGEkfUB8j8Soxa6LWXyP4pkqOJlyPI/AiY6C54r8z9658sz1o7zP/KoXVwO8vM/amrvhEZV9D/gK4Gtfrj0P1jtEta2G/U/0K6k/u5+9T9IcDYnJ+L1P8AxyE9fRfY/OPNZeJeo9j+wtOugzwv3Pyh2fckHb/c/oDcP8j/S9z8Y+aAaeDX4P5C6MkOwmPg/CHzEa+j7+D+APVaUIF/5P/j+57xYwvk/cMB55ZAl+j/ogQsOyYj6P2BDnTYB7Po/2AQvXzlP+z9QxsCHcbL7P8iHUrCpFfw/QEnk2OF4/D+4CnYBGtz8PzDMBypSP/0/qI2ZUoqi/T8gTyt7wgX+P5gQvaP6aP4/ENJOzDLM/j+Ik+D0ai//PwBVch2jkv8/eBYERtv1/z/460q3iSwAQLTMk8slXgBAcK3c38GPAEAqjiX0XcEAQOZubgj68gBAok+3HJYkAUBeMAAxMlYBQBoRSUXOhwFA1vGRWWq5AUCS0tptBusBQJLS2m0G6wFA1vGRWWq5AUAaEUlFzocBQF4wADEyVgFAok+3HJYkAUDmbm4I+vIAQCqOJfRdwQBAcK3c38GPAEC0zJPLJV4AQPjrSreJLABAeBYERtv1/z8AVXIdo5L/P4iT4PRqL/8/ENJOzDLM/j+YEL2j+mj+PyBPK3vCBf4/qI2ZUoqi/T8wzAcqUj/9P7gKdgEa3Pw/QEnk2OF4/D/Ih1KwqRX8P1DGwIdxsvs/2AQvXzlP+z9gQ502Aez6P+iBCw7JiPo/cMB55ZAl+j/4/ue8WML5P4A9VpQgX/k/CHzEa+j7+D+QujJDsJj4Pxj5oBp4Nfg/oDcP8j/S9z8odn3JB2/3P7C066DPC/c/OPNZeJeo9j/AMchPX0X2P0hwNicn4vU/0K6k/u5+9T9Y7RLWthv1P+Arga1+uPQ/amrvhEZV9D/yqF1cDvLzP3rnyzPWjvM/AiY6C54r8z+KZKjiZcjyPxKjFrotZfI/muGEkfUB8j8iIPNovZ7xP6peYUCFO/E/Mp3PF03Y8D+62z3vFHXwP0IarMbcEfA/lLE0PEld7z+kLhHr2JbuP7Sr7Zlo0O0/xCjKSPgJ7T/Upab3h0PsP+Qig6YXfes/9J9fVae26j8EHTwEN/DpPxSaGLPGKek/KBf1YVZj6D84lNEQ5pznP0gRrr911uY/WI6KbgUQ5j9oC2cdlUnlP3iIQ8wkg+Q/iAUge7S84z+YgvwpRPbiP6j/2NjTL+I/uHy1h2Np4T/I+ZE286LgP7Dt3MoFud8/0OeVKCUs3j/w4U6GRJ/cPxDcB+RjEts/MNbAQYOF2T9Q0HmfovjXP3DKMv3Ba9Y/kMTrWuHe1D+wvqS4AFLTP9C4XRYgxdE/+LIWdD840D8wWp+jvVbNP3BOEV/8PMo/sEKDGjsjxz/wNvXVeQnEPzArZ5G478A/4D6yme6ruz9gJ5YQbHi1P8Af9A7Tia4/wPC7/M0ioj8ABw+qI++GPwC10Z7wrIq/QJzsOUESo79AyyRMRnmvvyB9Lq8l8LW/oJRKOKgjvL8QVrNglSvBv9BhQaVWRcS/kG3P6Rdfx79QeV0u2XjKvxCF63Kaks2/YMi82y1W0L9AzgN+DuPRvyDUSiDvb9O/ANqRws/81L/g39hksInWv8DlHweRFti/oOtmqXGj2b+A8a1LUjDbv2D39O0yvdy/QP07kBNK3r8gA4My9Nbfv4AEZWrqseC/cIeIu1p44b9gCqwMyz7iv1CNz107BeO/QBDzrqvL478wkxYAHJLkvx4WOlGMWOW/Dpldovwe5r/+G4HzbOXmv+6epETdq+e/3iHIlU1y6L/OpOvmvTjpv74nDzgu/+m/rqoyiZ7F6r+eLVbaDozrv46weSt/Uuy/fDOdfO8Y7b9stsDNX9/tv1w55B7Qpe6/TLwHcEBs77+en5VgWBnwvxZhJ4mQfPC/jiK5scjf8L8G5EraAEPxv36l3AI5pvG/9mZuK3EJ8r9uKABUqWzyv+XpkXzhz/K/XasjpRkz87/VbLXNUZbzv00uR/aJ+fO/xe/YHsJc9L89sWpH+r/0v7Vy/G8yI/W/LTSOmGqG9b+l9R/Boun1vx23senaTPa/lHhDEhOw9r8MOtU6SxP3v4T7ZmODdve//Lz4i7vZ9790foq08zz4v+w/HN0roPi/ZAGuBWQD+b/cwj8unGb5v1SE0VbUyfm/zEVjfwwt+r9EB/WnRJD6v7zIhtB88/q/NIoY+bRW+7+sS6oh7bn7vyMNPEolHfy/m87Ncl2A/L8TkF+bleP8v4tR8cPNRv2/AxOD7AWq/b961BQVPg3+v/KVpj12cP6/alc4Zq7T/r/iGMqO5jb/v1raW7cemv+/0pvt31b9/7+lrj+ERzAAwGGPiJjjYQDAHXDRrH+TAMDZUBrBG8UAwJUxY9W39gDAURKs6VMoAcAN8/T971kBwMnTPRKMiwHAhbSGJii9AcBBlc86xO4BwP11GE9gIALAuFZhY/xRAsB0N6p3mIMCwDAY84s0tQLA7Pg7oNDmAsCo2YS0bBgDwGS6zcgISgPAIJsW3aR7A8Dce1/xQK0DwJhcqAXd3gPAVD3xGXkQBMAQHjouFUIEwMz+gkKxcwTAKm+nTH+MBMA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[400]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;kkDDHCiF1b91xtFzgxXUv/2muG0fq9K/KeJ3CvxF0b/z7x6UMszPv9zQ/ljuFs2/D2ePYytsyr+KstCz6cvHv06zwkkpNsW/W2llJeqqwr+w1LhGLCrAv5zqeVvfZ7u/apbjtGiQtr/IrK6Z9M2xv3BbthMGQaq/eDLSCigQob9AvWExnhKQvwADtFWYcFo/UJOSDqcMkz8YHiI1HQ+iP2AdOMzhbao/yKNFplBRsT9Izg3brVa1PzyOdIQIR7k/nON5omAivT82544aW3TAP1QnMJ4ETcI/rbMg3CwbxD/qmLFhHzrGP0T++FsoS8g/tj6ue05Ayj8R87QObbfLP9kGMFlBXs0/kDfBh8Apzz+8j//uBn7QPxxuj8jcRtE/fxmKGJ3y0T+eH130c4HSP39/v5UW69I/tmvkRtU10z/YBxpSLHnTP27nGs8R2tM/9zWtrM4d1D9m18XXoFfUP7cizvsgsNQ/Z2dUSEA11T83HW6S+m3VP2kUwJ+vy9U/qfSVowcd1j+OjuvWp0PWP00+n39eu9Y/oTqj+j5G1z9m96MOHpTXP2jdaUPJVdg/KfZCm3kb2T9l2TaIPZnZP0AD9mNRV9o/SGKyk6Pr2j/PJA64PY3bP3fVxuQNSdw/iDmiT+Id3T/3p5Xj1f7dP69OGJ664N4/EjtVFxq/3z8dICvo6j/gP+zA/GVEjeA/HTYIb6Ty4D80oiDCEoLhP1zqr/oNJeI/82GJ4CXF4j/AvHpliEfjPwtvr6pU0+M/DxcMqwx35D9PQvFm6wflP1C0jg+xkuU/QHtIBbIY5j+Dgxo5KZ3mP7j80ebGMuc/EuMJ1NLX5z+DSsjKJ4PoP2idIj0IJ+k/GFpDyd6s6T+s4bXE5DDqP0jFUwo7oeo/2p6bKir+6j9sSYHjGXnrP+K738J++es/i3GDk/t17D858jYmMOLsPyZkrPElMe0/LJ/dEO5e7T8EW1cJgKLtP/YeDpx/yO0/+x2mHWT37T/iZlWppFTuP3IgLGPspO4/5IxJJEvu7j83XVRSPk3vP6LcyfOCwO8/yp/of5kc8D9ngKpBIUPwP+F7O28EcPA/iFMLgRya8D/g0umL5snwP9dps8eRFvE/rp8yEMVV8T9V+Kq7943xP1iENU3fy/E/yZvzoP/v8T+9cracjhHyP1WdfTlAR/I/XojbpXpw8j9KRZnxAKjyP2C/e18i5PI/1lhLt+Ah8z8OtxypoGDzPwnspk/En/M/AfxkWqvw8z8UcvhZxkf0Pw4ugYXomPQ/0yw0jTXo9D9Jx6CCnjH1P3yAvcRrZvU/3hgXlXmR9T8Xbgje2sf1P07/MViTC/Y/9DiJ/DpL9j8ydoyNwnz2P8py3ETztPY/ThJh1wLv9j8ym4/SMCv3PxY3v98mZPc/csyTWWyT9z/VGrr65L73PzUnjs5Y6Pc/jkZHx84R+D9HWtBXtjf4P1wWbuXmVPg/GSnY88Zz+D9KSB+dJpb4Pz6F6lH7tfg/5b1UHubV+D+8XMmSB+f4P5k3hxSa8vg/d5WKzhUG+T+r79ivHC75P+tRv7EzSfk/VoqHnK5z+T8fhNPYa6L5P6KCBFjkwfk/uz26b+bq+T+UAc5Z0xH6P1BD4JtsNvo/wHgFx1hV+j9wP6VW2Wj6P2cnEAWKgvo/CFG6Y4ev+j+lAZhiWN76P7h9gBiQBfs/8J211Z0c+z/B6oQuNTX7P8D5WJJhUvs/WDp5wl55+z8k8Y8X26P7P3kKO9WR1fs/ccIdblgO/D/TbcH2CU78PzN6lSWHlPw/9+Vqvz3g/D8L0FaaSDD9P243qUA9hP0/GO8LuLPb/T+omgG3riD+P9GDWB8cWP4/L41CQiuP/j9xtL8f3MX+P5j5z7cu/P4/olxzCiMy/z+S3akXuWf/P2R8c9/wnP8/HDnQYcrR/z/cCWDPIgMAQByGIUsxHQBATpEspBA3AEBxK4HawFAAQIhUH+5BagBAkAwH35ODAECKUzittpwAQHYps1iqtQBAVY534W7OAEAlgoVHBOcAQOgE3Ypq/wBAnBZ+q6EXAUBEt2ipqS8BQNzmnISCRwFAZ6UaPSxfAUDk8uHSpnYBQFTP8kXyjQFAtTpNlg6lAUAINfHD+7sBQIwFNw1itQ9AT5yfYdynD0ATYLmo35kPQNhQhOJriw9An24AD4F8D0BnuS0uH20PQDExDEBGXQ9A/NWbRPZMD0DIp9w7LzwPQJamziXxKg9AZdJxAjwZD0A2K8bRDwcPQAixy5Ns9A5A22OCSFLhDkCwQ+rvwM0OQIZQA4q4uQ5AXorNFjmlDkA38UiWQpAOQBKFdQjVeg5A7UVTbfBkDkDKM+LElE4OQKlOIg/CNw5AiZYTTHggDkBrC7Z7twgOQE6tCZ5/8A1AMnwOs9DXDUAYeMS6qr4NQEajK7UNpQ1AVqYbTdaKDUBY/uYx7WYNQEnEjOqhQA1ANAzPVXgYDUBITqmC7+4MQCcsmbOrxQxApGSHNvOfDED8v/veaX0MQIU7B4C2XQxArglE7IJADEClJ2zB0SgMQMGfIZW9FwxAyslwpg0ODEChq1jwAgIMQEe6L9cl6wtAf3PGPqzXC0B9WSzGHcALQO0lcAQksgtA68ZIZkiiC0CLWoHzdZILQEQI6cckhQtAdv+ZRW97C0AsUWC/p3QLQNpU/h1TZwtABJpb8u1XC0De4dGJkksLQJrmBw/WQwtAZPpec+gzC0Clmw346ykLQELWPpGPHQtA5sOpnrYLC0A20fvrYvUKQG4/hdPl1wpAHlTEAxvSCkCDnFRoVsoKQDUH7q8nugpAOgsxf9yYCkBm5st2jnoKQEKlZUIAYQpA2HPcTaFICkBWsTcXBDQKQJW5R9qWGgpAHG7BaOz+CUAvQ2cV+eIJQNtc3mAUwwlA7mvQvdKqCUDqOQoCyYgJQMo+NxMDYwlAVvV6n5RGCUBoOwkOmykJQLiVkpgODAlAt8VfANnZCEBjytDE9K8IQPhpTQ2VgwhA6KEP78pSCECC0aEWPyIIQHj9bjuc9wdA32lUGkHOB0BaNBV5M6cHQBczoet5gwdAzRaBBi5kB0DVmbLi4lIHQAI3bDDxPQdAj6ZIpEQoB0DLCHKc+RMHQHGBEUC6AAdAU0g0twjzBkDeM7oB49UGQKz2z+vhrgZAt0ubrmygBkB4UtVaj4sGQEZjIJwYdwZAgbmEUodhBkCcAs/1CkgGQHQj0minLwZAW8hhk0sdBkBEk9QzQxAGQKj1Kimz9QVA1rJhlQHkBUBgBvIFr9MFQGLzYoCuvwVAldw4ouKoBUDZIwjuHJ0FQENYe4p/igVApj0+kRlyBUB+ZTfRgVcFQGxy4MTjPAVAO4u7g1AvBUBPLdFOwRYFQGKnUDO9+gRAZizefW/eBEBBrTOfYcoEQHzxsmXitgRA+bjWykudBECI483zioAEQLKbriq3YgRAD6UyQcNDBEAvWL2pWyQEQAo6CfA3BARAaRCvGYznA0ACXqC+pcEDQHntPUBDpANAIExagx6MA0AaZvjzuWsDQBT9CAC1TANAr1V42bQ3A0BgsmOgvCkDQP8EcFeoDwNA61k6nQ3yAkDyqRrtCdICQDr5t8U3swJAiUPkWzGWAkDYY5JA3HsCQJaPMNMzZQJAy9+foLlSAkAjWpTTMEMCQPc8Bx2WJwJA5tDQwqEPAkBrcHWq+fgBQBJUXdEf4QFA0drHuYrHAUCtKJmtgKoBQN11vjAflAFAfT/3g0WGAUAzEh+itGkBQFMnu2yUTwFAl0fQe5w1AUAS91U6wRsBQIM+BMesCQFA0jP9xqr6AEAvUd8WTOYAQK2RaD5iyABAIC2QWzGzAECI6RJod5sAQPaOeuuchQBAVKThJzJyAEBhdULcTV0AQNUgqb6FRQBAwioqBVAqAEA0OJjrww8AQD4QzxL47v8/ywpNh+LD/z8o7tjZ7Yv/PyClD3sJU/8/FOlbmBsb/z9ZdEPSuur+P7o1AXiouv4/1iqVieSK/j+qU/8Gb1v+PziwP/BHLP4/gEBWRW/9/T+BBEMG5c79Pzz8BTOpoP0/sSefy7ty/T/fhg7QHEX9P8cZVEDMF/0/aOBvHMrq/D/E2mFkFr78P9gIKhixkfw/pmrIN5pl/D8uAD3D0Tn8P3DJh7pXDvw/a8aoHSzj+z8g95/sTrj7P45bbSfAjfs/tvMQzn9j+z+Xv4rgjTn7PzK/2l7qD/s/h/IASZXm+j+VWf2ejr36P130z2DWlPo/38J4jmxs+j8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[400]}},&quot;selected&quot;:{&quot;id&quot;:&quot;66951&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;66950&quot;}},&quot;id&quot;:&quot;66934&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66920&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;66945&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66940&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66915&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;66923&quot;}},&quot;id&quot;:&quot;66917&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66908&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66952&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;66907&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;66910&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;66924&quot;}},&quot;id&quot;:&quot;66919&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66953&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;66949&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;66908&quot;}},&quot;id&quot;:&quot;66907&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66947&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;#ff0000&quot;,&quot;line_alpha&quot;:0,&quot;line_color&quot;:&quot;#ff0000&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66935&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;66923&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66949&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66916&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;66922&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;66907&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;66910&quot;},{&quot;id&quot;:&quot;66914&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;66911&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;66937&quot;},{&quot;id&quot;:&quot;66942&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;66945&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;66925&quot;},&quot;toolbar_location&quot;:&quot;above&quot;,&quot;x_range&quot;:{&quot;id&quot;:&quot;66899&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;66903&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;66901&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;66905&quot;}},&quot;id&quot;:&quot;66898&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66912&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#ff0000&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;#ff0000&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66936&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;66934&quot;}},&quot;id&quot;:&quot;66938&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;iN/LVk2lBMDps+87ILv8v844qFAD8vq/Evp/zQY8+r85Sp3zHLz5v3HaUoEM3ve/Vgb74hCb9r+d6JcSiJf1v1ZbH55FPPO/g6sA+RDx8r+CV5VB67zxv51ioQdpkPC/qaa8qLxy77+iEOgMs77uv7yGkEKZ3O2/8X/T9+iI7L8dQjH/mu3qv10OUDtLt+q/7KLEAaAK6r/IYAbQZPzov+Yz9voUc+i/7EpmNQSz579pyRpfr1nnv/W5gr7ZjOa/SizWQmcl5b8ivXxkOxjlv0lbwkH0n+O/AA8g4WVT479mX21y4Bnjv8dYkmPDwOK/IFWFb/Sr4b9Dg8YKfG/hv9PSqHA0ONm/p+eZO8411r80jhloQtfVv6o2174vp9G/ebun0S3s0L8iOSvXEljMvwIJXqNEisu/Rp8xbICYyr89/KT24CLHv2pCeeg7u8a/Vo6qp/+Awr+0eYbK6962v+bdgRfAA5m/mJO3yGxylT9Dd6ayYXeoP9lsY/yuxa4/QBooe4P2uj96aFgnAIbAP8mqJC4e8sA/zI/LivoixD86KuL4N87FP12t/yKYvMs/1CmpmFh6zT+yKYVhKUnPP2lLBKa3nc8/aes/V30T0j8FPMk85RHUP/VpQyLMrNY/Exn3O0K91j899PQccgbcP4onyPh30N4/rKEJ7vwR4D8bFioG8FHgP4etsXVPx+A/jS5eJNte4j8hfoquMXTiPzDuHbZijuI/DjsOrj8n4z/Dq6crp1bkP7/wSvOC9OQ/uRZRITwr5T+7Lf0GumDpP68ybNuzYew/QR+rzESB7T8GsOKDDiXwP58Ys+fzSvA/OgLRWVFp8D8FSv1icwbxPy5w/QqbH/E/QH1lcmS08z+i+DDybRT0P8fglFPjGPQ/+Rus+EY39D+Wcv5nIH70P4kPA0jYiPU/HGVhPGLv9T95MrYoBHb2P+aA915+C/c/8KxftWQp9z/6zkzA7Wf4P1uS2RshW/k/xYz2mzlf/T8p2rW0Xmf9P+d78hiV5v0/p7wh2SOt/j8hCbNvIIL/P6yot0kdEQBAktLabQbrAUA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[100]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;8EBoUmW15j8MJgjib6LxP5njq1f+hvI/9wJAmfzh8j/kWjGG8SHzP8iSVr/5EPQ/1XyCjney9D+yC7T2OzT1P1VS8DDdYfY/Pqp/g3eH9j8/VDVfiiH3P7JOL3zLt/c/VtbQ1VAj+D/Y+8U8U1D4P1HeW6/ZiPg/BCALwsXd+D95rzNAmUT5P2n8KzEtUvk/RdeO/1d9+T/OZ/7L5sD5PwZzQsE64/k/RW2m8j4T+j+mTTkolCn6P4NRX5DJXPo/7nRKL6a2+j+40OAm8bn6Py5pj+8CGPs/QPy3hyYr+z8mqGTjhzn7P85pGyfPT/s/uKoe5AKV+z8vX079IKT7P6bl6nH52Pw/C8OMOEY5/T86zvyyF0X9PysZJQgay/0/kQjLRXri/T9uTI3Sfjr+P3AfyrVbR/4/DOY8+XdW/j88sJXw0Y3+P9lreEFMlP4/G1eFBfDX/j8yzKuhCEn/P0T80H/4zf8/lLfIbHIVAEDvTGXD7jAAQNrG+F2LPQBAaaDsDdprAEBEwzoBMIQAQFYlcfGQhwBAflxW1BehAEBSEce/ca4AQGv9F8Hk3QBAT0nFxNLrAEBOKQxLSfoAQFsiML3t/ABAt/5z1TchAUDAk8xTHkEBQJ82JMLMagFAkXG/I9RrAUBET88hZ8ABQHmCjH8H7QFANjTBnT8CAkDDQsUAPgoCQLE1tu7pGAJA0sWLZNtLAkDET9E1hk4CQMa9w1bMUQJAYsfB9edkAkB49XTl1IoCQBheaV6QngJA1yIqhGelAkC3pd9AFywDQFaGbXs2jANA6GOVmSiwA0ACrPigQwkEQCjG7Pm8EgRAjkB0VlQaBECBUr/YnEEEQAxcv8LmRwRAUF+ZHBntBEAoPox8GwUFQDI45dQ4BgVA/gYrvtENBUCmnP8ZiB8FQOLDABI2YgVAR1kYj9h7BUCejC0KgZ0FQDrgvZffwgVAPOtXLVnKBUC+MxNw+xkGQJdk9kbIVgZAMaP9Zs5XB0CKdi2t11kHQPqePEaleQdAKm9I9kirB0BIwuwbiOAHQFbU26SOCAhASWntNoP1CEA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[100]}},&quot;selected&quot;:{&quot;id&quot;:&quot;66953&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;66952&quot;}},&quot;id&quot;:&quot;66939&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;66934&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;66935&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;66936&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;66938&quot;}},&quot;id&quot;:&quot;66937&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;66939&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;66940&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;66941&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;66943&quot;}},&quot;id&quot;:&quot;66942&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;}],&quot;root_ids&quot;:[&quot;66898&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"c6488266-d4ad-410e-a26e-47aa3c17c8ef","root_ids":["66898"],"roots":{"66898":"7d69098a-9bf0-49f5-b672-27fda147cbab"}}];
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