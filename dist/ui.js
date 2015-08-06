var ho;
(function (ho) {
    var ui;
    (function (ui) {
        function run(options) {
            if (options === void 0) { options = new Options(); }
            options = new Options(options);
            var p = options.process()
                .then(ho.components.run)
                .then(ho.flux.run);
            return p;
        }
        ui.run = run;
        var components = [
            "Stored",
            "View",
        ];
        var attributes = [
            "Bind",
            "BindBi",
        ];
        var stores = [];
        var Options = (function () {
            function Options(opt) {
                if (opt === void 0) { opt = {}; }
                this.root = "App";
                this.router = ho.flux.Router;
                this.map = true;
                this.mapDefault = "bower_components/ho-ui/dist/";
                this.dir = true;
                this.min = false;
                for (var key in opt) {
                    this[key] = opt[key];
                }
            }
            Options.prototype.process = function () {
                return ho.promise.Promise.create(this.processDir())
                    .then(this.processMin.bind(this))
                    .then(this.processMap.bind(this))
                    .then(this.processRouter.bind(this))
                    .then(this.processRoot.bind(this));
            };
            Options.prototype.processRoot = function () {
                var _this = this;
                return new ho.promise.Promise(function (resolve, reject) {
                    if (typeof _this.root === 'string') {
                        ho.components.registry.instance.loadComponent(_this.root)
                            .then(resolve)
                            .catch(reject);
                    }
                    else {
                        ho.components.registry.instance.register(_this.root);
                        resolve(null);
                    }
                });
            };
            Options.prototype.processRouter = function () {
                var _this = this;
                return new ho.promise.Promise(function (resolve, reject) {
                    if (typeof _this.router === 'string') {
                        ho.flux.STORES.loadStore(_this.router)
                            .then(resolve)
                            .catch(reject);
                    }
                    else {
                        resolve(new _this.router());
                    }
                });
            };
            Options.prototype.processMap = function () {
                var _this = this;
                if (typeof this.map === 'boolean') {
                    if (!this.map)
                        return;
                    else
                        this.map = this.mapDefault;
                }
                components.forEach(function (c) {
                    ho.components.componentprovider.mapping[c] = _this.map + 'components/' + c + '/' + c + '.js';
                });
                attributes.forEach(function (a) {
                    ho.components.attributeprovider.mapping[a] = _this.map + 'attributes/' + a + '/' + a + '.js';
                });
                stores.forEach(function (s) {
                    ho.flux.storeprovider.mapping[s] = _this.map + 'stores/' + s + '/' + s + '.js';
                });
            };
            Options.prototype.processDir = function () {
                ho.components.dir = this.dir;
            };
            Options.prototype.processMin = function () {
                ho.components.componentprovider.instance.useMin = this.min;
                ho.components.attributeprovider.instance.useMin = this.min;
                ho.flux.storeprovider.instance.useMin = this.min;
            };
            return Options;
        })();
    })(ui = ho.ui || (ho.ui = {}));
})(ho || (ho = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpLnRzIl0sIm5hbWVzIjpbImhvIiwiaG8udWkiLCJoby51aS5ydW4iLCJoby51aS5PcHRpb25zIiwiaG8udWkuT3B0aW9ucy5jb25zdHJ1Y3RvciIsImhvLnVpLk9wdGlvbnMucHJvY2VzcyIsImhvLnVpLk9wdGlvbnMucHJvY2Vzc1Jvb3QiLCJoby51aS5PcHRpb25zLnByb2Nlc3NSb3V0ZXIiLCJoby51aS5PcHRpb25zLnByb2Nlc3NNYXAiLCJoby51aS5PcHRpb25zLnByb2Nlc3NEaXIiLCJoby51aS5PcHRpb25zLnByb2Nlc3NNaW4iXSwibWFwcGluZ3MiOiJBQUFBLElBQU8sRUFBRSxDQXFIUjtBQXJIRCxXQUFPLEVBQUU7SUFBQ0EsSUFBQUEsRUFBRUEsQ0FxSFhBO0lBckhTQSxXQUFBQSxFQUFFQSxFQUFDQSxDQUFDQTtRQUViQyxhQUFvQkEsT0FBOEJBO1lBQTlCQyx1QkFBOEJBLEdBQTlCQSxjQUFxQkEsT0FBT0EsRUFBRUE7WUFDakRBLE9BQU9BLEdBQUdBLElBQUlBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1lBRS9CQSxJQUFJQSxDQUFDQSxHQUFHQSxPQUFPQSxDQUFDQSxPQUFPQSxFQUFFQTtpQkFDeEJBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLFVBQVVBLENBQUNBLEdBQUdBLENBQUNBO2lCQUN2QkEsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFFbkJBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO1FBQ1ZBLENBQUNBO1FBUmVELE1BQUdBLE1BUWxCQSxDQUFBQTtRQUVEQSxJQUFJQSxVQUFVQSxHQUFHQTtZQUNoQkEsUUFBUUE7WUFDUkEsTUFBTUE7U0FDTkEsQ0FBQ0E7UUFFRkEsSUFBSUEsVUFBVUEsR0FBR0E7WUFDaEJBLE1BQU1BO1lBQ05BLFFBQVFBO1NBQ1JBLENBQUNBO1FBRUZBLElBQUlBLE1BQU1BLEdBQUdBLEVBRVpBLENBQUNBO1FBV0ZBO1lBUUNF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Q0EsT0FBT0EsQ0FBQ0EsVUFBQUEsQ0FBQ0E7b0JBQ2ZBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLEtBQUlBLENBQUNBLEdBQUdBLEdBQUdBLFNBQVNBLEdBQUdBLENBQUNBLEdBQUdBLEdBQUdBLEdBQUdBLENBQUNBLEdBQUdBLEtBQUtBLENBQUNBO2dCQUMvRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDSkEsQ0FBQ0E7WUFFU0wsNEJBQVVBLEdBQXBCQTtnQkFDQ00sRUFBRUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0E7WUFDOUJBLENBQUNBO1lBRVNOLDRCQUFVQSxHQUFwQkE7Z0JBQ0NPLEVBQUVBLENBQUNBLFVBQVVBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0E7Z0JBQzNEQSxFQUFFQSxDQUFDQSxVQUFVQSxDQUFDQSxpQkFBaUJBLENBQUNBLFFBQVFBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBO2dCQUMzREEsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0E7WUFDbERBLENBQUNBO1lBQ0ZQLGNBQUNBO1FBQURBLENBaEZBRixBQWdGQ0UsSUFBQUY7SUFFRkEsQ0FBQ0EsRUFySFNELEVBQUVBLEdBQUZBLEtBQUVBLEtBQUZBLEtBQUVBLFFBcUhYQTtBQUFEQSxDQUFDQSxFQXJITSxFQUFFLEtBQUYsRUFBRSxRQXFIUiIsImZpbGUiOiJ1aS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZSBoby51aSB7XG5cblx0ZXhwb3J0IGZ1bmN0aW9uIHJ1bihvcHRpb25zOklPcHRpb25zPW5ldyBPcHRpb25zKCkpOiBoby5wcm9taXNlLlByb21pc2U8YW55LCBhbnk+IHtcblx0XHRvcHRpb25zID0gbmV3IE9wdGlvbnMob3B0aW9ucyk7XG5cblx0XHRsZXQgcCA9IG9wdGlvbnMucHJvY2VzcygpXG5cdFx0LnRoZW4oaG8uY29tcG9uZW50cy5ydW4pXG5cdFx0LnRoZW4oaG8uZmx1eC5ydW4pO1xuXG5cdFx0cmV0dXJuIHA7XG5cdH1cblxuXHRsZXQgY29tcG9uZW50cyA9IFtcblx0XHRcIlN0b3JlZFwiLFxuXHRcdFwiVmlld1wiLFxuXHRdO1xuXG5cdGxldCBhdHRyaWJ1dGVzID0gW1xuXHRcdFwiQmluZFwiLFxuXHRcdFwiQmluZEJpXCIsXG5cdF07XG5cblx0bGV0IHN0b3JlcyA9IFtcblxuXHRdO1xuXG5cdGV4cG9ydCBpbnRlcmZhY2UgSU9wdGlvbnMge1xuXHRcdHJvb3Q6IHN0cmluZyB8IHR5cGVvZiBoby5jb21wb25lbnRzLkNvbXBvbmVudDsgLy9Sb290IGNvbXBvbmVudCB0byByZWdpc3Rlcjtcblx0XHRyb3V0ZXI6IHN0cmluZyB8IHR5cGVvZiBoby5mbHV4LlJvdXRlcjsgLy9hbHRlcm5hdGl2ZSByb3V0ZXIgY2xhc3Ncblx0XHRtYXA6IHN0cmluZyB8IGJvb2xlYW47IC8vIGlmIHNldCwgbWFwIGFsbCBoby51aSBjb21wb25lbnRzIGluIHRoZSBjb21wb25lbnRwcm92aWRlciB0byB0aGUgZ2l2ZW4gdXJsXG5cdFx0ZGlyOiBib29sZWFuOyAvLyBzZXQgdXNlZGlyIGluIGhvLmNvbXBvbmVudHNcblx0XHRtaW46IGJvb2xlYW47XG5cdFx0cHJvY2VzczogKCk9PmhvLnByb21pc2UuUHJvbWlzZTxhbnksIGFueT47XG5cdH1cblxuXHRjbGFzcyBPcHRpb25zIGltcGxlbWVudHMgSU9wdGlvbnMge1xuXHRcdHJvb3Q6IHN0cmluZyB8IHR5cGVvZiBoby5jb21wb25lbnRzLkNvbXBvbmVudCA9IFwiQXBwXCJcblx0XHRyb3V0ZXI6IHN0cmluZyB8IHR5cGVvZiBoby5mbHV4LlJvdXRlciA9IGhvLmZsdXguUm91dGVyO1xuXHRcdG1hcDogc3RyaW5nIHwgYm9vbGVhbiA9IHRydWU7XG5cdFx0bWFwRGVmYXVsdCA9IFwiYm93ZXJfY29tcG9uZW50cy9oby11aS9kaXN0L1wiO1xuXHRcdGRpciA9IHRydWU7XG5cdFx0bWluID0gZmFsc2U7XG5cblx0XHRjb25zdHJ1Y3RvcihvcHQ6IElPcHRpb25zID0gPElPcHRpb25zPnt9KSB7XG5cdFx0XHRmb3IodmFyIGtleSBpbiBvcHQpIHtcblx0XHRcdFx0dGhpc1trZXldID0gb3B0W2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cHJvY2VzcygpOiBoby5wcm9taXNlLlByb21pc2U8YW55LCBhbnk+e1xuXHRcdFx0cmV0dXJuIGhvLnByb21pc2UuUHJvbWlzZS5jcmVhdGUodGhpcy5wcm9jZXNzRGlyKCkpXG5cdFx0XHQudGhlbih0aGlzLnByb2Nlc3NNaW4uYmluZCh0aGlzKSlcblx0XHRcdC50aGVuKHRoaXMucHJvY2Vzc01hcC5iaW5kKHRoaXMpKVxuXHRcdFx0LnRoZW4odGhpcy5wcm9jZXNzUm91dGVyLmJpbmQodGhpcykpXG5cdFx0XHQudGhlbih0aGlzLnByb2Nlc3NSb290LmJpbmQodGhpcykpXG5cdFx0fVxuXG5cdFx0cHJvdGVjdGVkIHByb2Nlc3NSb290KCkge1xuXHRcdFx0cmV0dXJuIG5ldyBoby5wcm9taXNlLlByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRpZih0eXBlb2YgdGhpcy5yb290ID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdGhvLmNvbXBvbmVudHMucmVnaXN0cnkuaW5zdGFuY2UubG9hZENvbXBvbmVudCg8c3RyaW5nPnRoaXMucm9vdClcblx0XHRcdFx0XHQudGhlbihyZXNvbHZlKVxuXHRcdFx0XHRcdC5jYXRjaChyZWplY3QpO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aG8uY29tcG9uZW50cy5yZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3Rlcig8dHlwZW9mIGhvLmNvbXBvbmVudHMuQ29tcG9uZW50PnRoaXMucm9vdClcblx0XHRcdFx0XHRyZXNvbHZlKG51bGwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRwcm90ZWN0ZWQgcHJvY2Vzc1JvdXRlcigpOiBoby5wcm9taXNlLlByb21pc2U8YW55LCBhbnk+IHtcblx0XHRcdHJldHVybiBuZXcgaG8ucHJvbWlzZS5Qcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0aWYodHlwZW9mIHRoaXMucm91dGVyID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdGhvLmZsdXguU1RPUkVTLmxvYWRTdG9yZSg8c3RyaW5nPnRoaXMucm91dGVyKVxuXHRcdFx0XHRcdC50aGVuKHJlc29sdmUpXG5cdFx0XHRcdFx0LmNhdGNoKHJlamVjdCk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXNvbHZlKG5ldyAoPHR5cGVvZiBoby5mbHV4LlJvdXRlcj50aGlzLnJvdXRlcikoKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0fVxuXG5cdFx0cHJvdGVjdGVkIHByb2Nlc3NNYXAoKTogdm9pZCB7XG5cdFx0XHRpZih0eXBlb2YgdGhpcy5tYXAgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHRpZighdGhpcy5tYXApXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0dGhpcy5tYXAgPSB0aGlzLm1hcERlZmF1bHQ7XG5cdFx0XHR9XG5cblx0XHRcdGNvbXBvbmVudHMuZm9yRWFjaChjID0+IHtcblx0XHRcdFx0aG8uY29tcG9uZW50cy5jb21wb25lbnRwcm92aWRlci5tYXBwaW5nW2NdID0gdGhpcy5tYXAgKyAnY29tcG9uZW50cy8nICsgYyArICcvJyArIGMgKyAnLmpzJztcblx0XHRcdH0pO1xuXG5cdFx0XHRhdHRyaWJ1dGVzLmZvckVhY2goYSA9PiB7XG5cdFx0XHRcdGhvLmNvbXBvbmVudHMuYXR0cmlidXRlcHJvdmlkZXIubWFwcGluZ1thXSA9IHRoaXMubWFwICsgJ2F0dHJpYnV0ZXMvJyArIGEgKyAnLycgKyBhICsgJy5qcyc7XG5cdFx0XHR9KTtcblxuXHRcdFx0c3RvcmVzLmZvckVhY2gocyA9PiB7XG5cdFx0XHRcdGhvLmZsdXguc3RvcmVwcm92aWRlci5tYXBwaW5nW3NdID0gdGhpcy5tYXAgKyAnc3RvcmVzLycgKyBzICsgJy8nICsgcyArICcuanMnO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cHJvdGVjdGVkIHByb2Nlc3NEaXIoKTogdm9pZCB7XG5cdFx0XHRoby5jb21wb25lbnRzLmRpciA9IHRoaXMuZGlyO1xuXHRcdH1cblxuXHRcdHByb3RlY3RlZCBwcm9jZXNzTWluKCk6IHZvaWQge1xuXHRcdFx0aG8uY29tcG9uZW50cy5jb21wb25lbnRwcm92aWRlci5pbnN0YW5jZS51c2VNaW4gPSB0aGlzLm1pbjtcblx0XHRcdGhvLmNvbXBvbmVudHMuYXR0cmlidXRlcHJvdmlkZXIuaW5zdGFuY2UudXNlTWluID0gdGhpcy5taW47XG5cdFx0XHRoby5mbHV4LnN0b3JlcHJvdmlkZXIuaW5zdGFuY2UudXNlTWluID0gdGhpcy5taW47XG5cdFx0fVxuXHR9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==