var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var FluxComponent = (function (_super) {
    __extends(FluxComponent, _super);
    function FluxComponent() {
        _super.apply(this, arguments);
        this.stores = [];
        this.actions = [];
    }
    FluxComponent.prototype.init = function () {
        var p_super = ho.promise.Promise.create(_super.prototype.init.call(this));
        var p_stores = this.stores.map(function (s) {
            return ho.flux.STORES.loadStore(s);
        });
        var p_actions = this.initActions();
        var promises = [].concat(p_super, p_stores, p_actions);
        return ho.promise.Promise.all(promises);
    };
    FluxComponent.prototype.initSotres = function () {
        var self = this;
        var promises = this.stores.map(function (sName) {
            return ho.flux.STORES.loadStore(sName)
                .then(function (s) {
                self.stores[sName] = s;
            });
        });
        return ho.promise.Promise.all(promises);
    };
    FluxComponent.prototype.initActions = function () {
        var self = this;
        var promises = this.actions.map(function (aName) {
            return ho.flux.ACTIONS.loadAction(aName)
                .then(function (a) {
                self.actions[aName] = a;
            });
        });
        return ho.promise.Promise.all(promises);
    };
    return FluxComponent;
})(ho.components.Component);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRmx1eGNvbXBvbmVudC9GbHV4Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkZsdXhDb21wb25lbnQiLCJGbHV4Q29tcG9uZW50LmNvbnN0cnVjdG9yIiwiRmx1eENvbXBvbmVudC5pbml0IiwiRmx1eENvbXBvbmVudC5pbml0U290cmVzIiwiRmx1eENvbXBvbmVudC5pbml0QWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7SUFBNEJBLGlDQUF1QkE7SUFBbkRBO1FBQTRCQyw4QkFBdUJBO1FBQzNDQSxXQUFNQSxHQUFrQkEsRUFBRUEsQ0FBQ0E7UUFDM0JBLFlBQU9BLEdBQWtCQSxFQUFFQSxDQUFDQTtJQXVDcENBLENBQUNBO0lBckNBRCw0QkFBSUEsR0FBSkE7UUFDQ0UsSUFBSUEsT0FBT0EsR0FBR0EsRUFBRUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsZ0JBQUtBLENBQUNBLElBQUlBLFdBQUVBLENBQUNBLENBQUNBO1FBRXREQSxJQUFJQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFBQSxDQUFDQTtZQUMvQkEsTUFBTUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDcENBLENBQUNBLENBQUNBLENBQUNBO1FBRUhBLElBQUlBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO1FBRW5DQSxJQUFJQSxRQUFRQSxHQUFHQSxFQUFFQSxDQUFDQSxNQUFNQSxDQUFDQSxPQUFPQSxFQUFFQSxRQUFRQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQTtRQUV2REEsTUFBTUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7SUFDekNBLENBQUNBO0lBRVNGLGtDQUFVQSxHQUFwQkE7UUFDQ0csSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDaEJBLElBQUlBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLFVBQUFBLEtBQUtBO1lBQ25DQSxNQUFNQSxDQUFDQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxDQUFDQTtpQkFDckNBLElBQUlBLENBQUNBLFVBQUFBLENBQUNBO2dCQUNOQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUN4QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7UUFDSEEsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7UUFFRkEsTUFBTUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7SUFDekNBLENBQUNBO0lBRVNILG1DQUFXQSxHQUFyQkE7UUFDQ0ksSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDaEJBLElBQUlBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLFVBQUFBLEtBQUtBO1lBQ3BDQSxNQUFNQSxDQUFDQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFVQSxDQUFDQSxLQUFLQSxDQUFDQTtpQkFDdkNBLElBQUlBLENBQUNBLFVBQUFBLENBQUNBO2dCQUNOQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUN6QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7UUFDSEEsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7UUFFRkEsTUFBTUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7SUFDekNBLENBQUNBO0lBQ0ZKLG9CQUFDQTtBQUFEQSxDQXpDQSxBQXlDQ0EsRUF6QzJCLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQXlDbEQiLCJmaWxlIjoiY29tcG9uZW50cy9GbHV4Y29tcG9uZW50L0ZsdXhDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBGbHV4Q29tcG9uZW50IGV4dGVuZHMgaG8uY29tcG9uZW50cy5Db21wb25lbnQge1xyXG5cdHB1YmxpYyBzdG9yZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuXHRwdWJsaWMgYWN0aW9uczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0bGV0IHBfc3VwZXIgPSBoby5wcm9taXNlLlByb21pc2UuY3JlYXRlKHN1cGVyLmluaXQoKSk7XHJcblxyXG5cdFx0bGV0IHBfc3RvcmVzID0gdGhpcy5zdG9yZXMubWFwKHMgPT4ge1xyXG5cdFx0XHRyZXR1cm4gaG8uZmx1eC5TVE9SRVMubG9hZFN0b3JlKHMpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0bGV0IHBfYWN0aW9ucyA9IHRoaXMuaW5pdEFjdGlvbnMoKTtcclxuXHJcblx0XHRsZXQgcHJvbWlzZXMgPSBbXS5jb25jYXQocF9zdXBlciwgcF9zdG9yZXMsIHBfYWN0aW9ucyk7XHJcblxyXG5cdFx0cmV0dXJuIGhvLnByb21pc2UuUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGluaXRTb3RyZXMoKTogaG8ucHJvbWlzZS5Qcm9taXNlPGFueSwgYW55PiB7XHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblx0XHRsZXQgcHJvbWlzZXMgPSB0aGlzLnN0b3Jlcy5tYXAoc05hbWUgPT4ge1xyXG5cdFx0XHRyZXR1cm4gaG8uZmx1eC5TVE9SRVMubG9hZFN0b3JlKHNOYW1lKVxyXG5cdFx0XHQudGhlbihzID0+IHtcclxuXHRcdFx0XHRzZWxmLnN0b3Jlc1tzTmFtZV0gPSBzO1xyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHJcblx0XHRyZXR1cm4gaG8ucHJvbWlzZS5Qcm9taXNlLmFsbChwcm9taXNlcyk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgaW5pdEFjdGlvbnMoKTogaG8ucHJvbWlzZS5Qcm9taXNlPGFueSwgYW55PiB7XHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblx0XHRsZXQgcHJvbWlzZXMgPSB0aGlzLmFjdGlvbnMubWFwKGFOYW1lID0+IHtcclxuXHRcdFx0cmV0dXJuIGhvLmZsdXguQUNUSU9OUy5sb2FkQWN0aW9uKGFOYW1lKVxyXG5cdFx0XHQudGhlbihhID0+IHtcclxuXHRcdFx0XHRzZWxmLmFjdGlvbnNbYU5hbWVdID0gYTtcclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblxyXG5cdFx0cmV0dXJuIGhvLnByb21pc2UuUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=