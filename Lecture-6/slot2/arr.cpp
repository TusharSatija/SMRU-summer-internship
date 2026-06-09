int low=0; high=nums.size()-1;
while(low+1<n and nums[low]<=nums[low+1])
    {
        low++;
    }
while(high-1>=0  and nums[high-1]<=nums[high])
{
    high--;
}
if(low=n-1)
    return 0;
//find min and max 
int wmin=INT_MAX ,Wmax=INT_MIN;

for(int i=low;i<=high;i++)
{
    wmin=min(wmin,nums[i]);
    Wmax=max(Wmax,nums[i]);
}

while(low-1>=0 and nums[low-1]>wmin)
{
    low--;
}
while(high+1 <= n-1  and nums[high+1]<Wmax)
{
    high++;
}

return high-low+1;