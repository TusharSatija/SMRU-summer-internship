  int n=nums.length;
        int low=0;
        int high=n-1;
        while(low+1<n && nums[low]<=nums[low+1]){
            low++;
        }
        while(high-1>=0 && nums[high-1]<=nums[high]){
            high--;
        }
        if(low==n-1){
            return 0;
        }
        int max = Integer.MIN_VALUE;
        int min = Integer.MAX_VALUE;
        for (int i = low; i <= high; i++) {
            min = Math.min(min,nums[i]);
            max = Math.max(max, nums[i]);
        }
        while(low-1>0&& nums[low-1]>min){
            low--;
        }
        while(high+1<=n-1&&nums[high+1]<max){
            high--;
        }
        return high-low+1;
   