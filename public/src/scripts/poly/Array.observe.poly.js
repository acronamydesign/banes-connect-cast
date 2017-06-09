if (!Array.prototype.forEach)
{
    Object.defineProperty(Array.prototype, 'forEach',
    {
        enumerable: false,
        value: function(callback)
        {
            for(var index = 0; index != this.length; index++) { callback(this[index], index, this); }
        }
    });
}

if(Object.observe)
{
    Object.defineProperty(Array.prototype, 'Observe',
    {
        set: function(callback)
        {
            Object.observe(this, function(changes)
            {
                changes.forEach(function(change)
                {
                    if(change.type == 'update') { callback(); }
                });
            });
        }
    });
}
else
{
    Object.defineProperties(Array.prototype,
    { 
        onchange: { enumerable: false, writable: true, value: function() { } },
        Observe:
        {
            set: function(callback)
            {
                Object.defineProperty(this, 'onchange', { enumerable: false, writable: true, value: callback }); 
            }
        }
    });

    var names = ['push', 'pop', 'reverse', 'shift', 'unshift'];
    names.forEach(function(name)
    {
        if(!(name in Array.prototype)) { return; }
        var pointer = Array.prototype[name];
        Array.prototype[name] = function()
        {
            pointer.apply(this, arguments); 
            this.onchange();
        }
    });
}