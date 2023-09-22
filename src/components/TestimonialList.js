

import React from 'react';

const TestimonialList = ({ Testimonials }) => {
  return (
    <div>
      <div style={{ margin:0,width:'100%',alignContent:'center',display: 'flex',flexDirection: 'row', flexWrap: 'nowrap' ,marginTop:92}}>
        {Testimonials.map((testimonial) => (
          <div style={{ backgroundImage: `url(${testimonial.image})`,backgroundSize:'cover', padding: 0, width: 300, height: 300, borderRadius: 15,margin:40 }}>
          <div style={{ fontWeight: 'bold', fontSize: 40,marginTop:130, color: 'white', textAlign: 'center' }}>{testimonial.name}</div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialList;
