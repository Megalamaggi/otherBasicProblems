const data = [
    {
      'item': 'orange',
      quantity:5,
      'value': 100
    },
    {
      'item': 'grapes',
       quantity:3,
      'value': 60
    },
    {
      'item': 'apples',
       quantity:4,
      'value': 140
    }
    ];
    
    function getProduct() {
        const result = data.map((ele)=>(ele.value)*(ele.quantity));
        const total= result.reduce((prev,curr)=>(prev+curr));
        return {result,total};
    }
     console.log(getProduct());





