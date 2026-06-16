let radii=[1,2,3,4,5];
function calculate(logic)
{
    let res=[];
    for(let i=0;i<radii.length;i++)
    {
        res.push(logic(radii[i]));
    }
    console.log(res);
};

function area(r)
{
    return Math.PI*r*r;
}

function circ(r)
{
    return 2*Math.PI*r;
}

function vol(r)
{
    return 4/3*Math.PI*r*r*r;
}
function hemi(r)
{
    return 2/3*Math.PI*r*r*r;
}


calculate(area);
calculate(vol);
calculate(circ);
calculate(hemi);
