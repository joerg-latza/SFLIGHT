function Application() {       this.routes = [];}  Application.prototype.get = function(route, fun) {       this.routes.push({method: $.net.http.GET, route: route, fun: fun});}; Application.prototype.put = function(route, fun) {       this.routes.push({method: $.net.http.PUT, route: route, fun: fun});}; Application.prototype.post = function(route, fun) {       this.routes.push({method: $.net.http.POST, route: route, fun: fun});}; Application.prototype.deleted = function(route, fun) {       this.routes.push({method: $.net.http.DELETE, route: route, fun: fun});}; Application.prototype.dispatch = function(req, res) {       $.trace.error("[url] " + req.url);       var match = this.router(req.method, req.url, this.routes);       if (match) {              req.params = match.params;              match.route.fun(req, res);              return;       }       else {              res.writeHead($.net.http.FORBIDDEN);              res.end();              return;       }}; Application.prototype.router = function(method, route, routes) {       var i=0;       for(i=0; i < routes.length; i++) {              var r = routes[i].route;              r = typeof r === 'string' ? new RegExp(r) : r;              if(routes[i].method === method && r.exec(route)) {                     return {route: routes[i], params: r.exec(route).slice(1)};              }                    }       return undefined;}; if($.LOCAL) {        var me = this;      //     Application.prototype.listen = function() {////            var me = this;////            require('http').createServer(function (req, res) {////                   // add the user's information//                   req.user = {name: "fake"};              ////                   // add parameters//                   req.query = require("url").parse(req.url, true).query;////                   me.dispatch(req, res);////            }).listen(8888, '0.0.0.0');//     };     }else {        Application.prototype.listen = function() {               // add the user's information              $.request.user = {name: $.session.getUsername()};               // add parameters              $.request.query = {};              var i = 0; for (i = 0; i < $.request.parameters.length; i++) {                     $.request.query[$.request.parameters[i].name] = $.request.parameters[i].value;              }               $.request.url = $.request.path.replace(new RegExp("(.*?)\\.xsjs"), "");                           $.response.pbody = "";              $.response.write = function(obj) {                     if(obj) {                           $.response.pbody += obj.toString();                     }              };              $.response.end = function(obj) {                     $.response.write(obj);                     $.response.setBody($.response.pbody);              };                           $.response.setHeader = function(name, value) {                     $.response.headers.set(name, value);              };               $.response.writeHead = function(status) {                     $.response.status = status;              };                    this.dispatch($.request, $.response);       }; }// DBfunction query(sql, par, fun, end, err){       $.trace.error("[db::query] " + sql);       $.trace.error("[db::query] " + par);        var con,              stm,              res,              col;             try       {              con = $.db.getConnection();              stm = con.prepareStatement(sql);              res = stm.executeQuery();              col = res.getMetaData().getColumnCount();                    while(res.next()) {                           var obj = {},                           j = 1;                                         for(j = 1; j <=col; j++) {                           obj[res.getMetaData().getColumnLabel(j)] = res.getString(j);                     }                                         try {                           fun(obj);                     } catch(ex1) {                           $.trace.error("[db::query fun callback error] " + ex1.toString());                     }              }                           try {                     end();              } catch(ex2) {                     $.trace.error("[db::query end callback error] " + ex2.toString());              }       }       catch(ex3) {              $.trace.error("[db::query] " + ex3.toString());              err(ex3);       }       finally {              res.close();              stm.close();              con.close();       }      }  function queryAll(sql, params, fun) {       var all = [];             query(sql, params,       function(row) {              all.push(row);       },       function() {              $.trace.error("[db::queryAll] " + JSON.stringify(all));              fun(null, all);       },       function(err) {              fun(err);       });}function alter(sql, par, fun) {    $.trace.error("[db::query] " + sql);    $.trace.error("[db::query] " + par);     var con,        stm;          try {        con = $.db.getConnection();        stm = con.prepareStatement(sql);                     var i = 0;        par.forEach(function(p) {            stm[p.type](i++, p.value);        });        i = stm.executeUpdate();        stm.close();        con.commit();        fun(null, i);    }    catch(err) {        $.trace.error("[db::query] " + JSON.stringify(err));        fun(err);    }    finally {        stm.close();        con.close();    }  }function create() {    return new Application();} 