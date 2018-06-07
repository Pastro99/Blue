

var root=new Array(new Array(), new Array(), new Array(), new Array(), new Array());
root[1]['base']=$('#1');
root[2]['base']=$('#2');
root[3]['base']=$('#3');
root[4]['base']=$('#4');
root[0]['effect']=new Array();
root[1]['effect']=new Array();
root[2]['effect']=new Array();
root[3]['effect']=new Array();
root[4]['effect']=new Array();
var tuna = new Tuna(Pizzicato.context);

var lastPreSet=root[1]['base'].get(0);

function addSwitchingSet(){
  for(var i=1;i<5;i++){
    console.log('ehi');
    window.root[i]['base'].on('click', function(){
      if(window.lastPreSet!=this){
        console.log(window.lastPreSet.id);
        var now=this.id;
        var last=window.lastPreSet.id;
        root[0]['effect']['volume'].volume=root[now]['effect']['volume'];
        root[0]['effect']['gain'].gain=root[now]['effect']['gain'];
        root[0]['effect']['bass'].gain=root[now]['effect']['bass'];
        root[0]['effect']['middle'].gain=root[now]['effect']['middle'];
        root[0]['effect']['treble'].gain=root[now]['effect']['treble'];
        //delay
        root[0]['effect']['delay'].mix=root[now]['effect']['delay']['mix'];
        root[0]['effect']['delay'].time=root[now]['effect']['delay']['time'];
        root[0]['effect']['delay'].feedback=root[now]['effect']['delay']['feedback'];
        if(root[now]['effect']['delay']['check']){
          if(!root[last]['effect']['delay']['check']){
            guitar.addEffect(root[0]['effect']['delay']);
          }
        }
        else{
          if(root[last]['effect']['delay']['check']){
            guitar.removeEffect(root[0]['effect']['delay']);
          }
        }
        //distortion
        root[0]['effect']['distortion'].type=root[now]['effect']['distortion']['type'];
        root[0]['effect']['distortion'].drive=root[now]['effect']['distortion']['curve'];
        if(root[now]['effect']['distortion']['check']){
          if(!root[last]['effect']['distortion']['check']){
            root[0]['effect']['treble'].disconnect(0);
            root[0]['effect']['treble'].connect(root[0]['effect']['distortion']);
          }
        }
        else{
          if(root[last]['effect']['delay']['check']){
            root[0]['effect']['treble'].disconnect(0);
            root[0]['effect']['treble'].connect(Pizzicato.context.destination);
          }
        }
        //ring
        root[0]['effect']['ring'].mix=root[now]['effect']['ring']['mix'];
        root[0]['effect']['ring'].distortion=root[now]['effect']['ring']['distortion'];
        root[0]['effect']['ring'].speed=root[now]['effect']['ring']['speed'];
        if(root[now]['effect']['ring']['check']){
          if(!root[last]['effect']['ring']['check']){
            guitar.addEffect(root[0]['effect']['ring']);
          }
        }
        else{
          if(root[last]['effect']['ring']['check']){
            guitar.removeEffect(root[0]['effect']['ring']);
          }
        }
        //tremolo_
        root[0]['effect']['tremolo'].mix=root[now]['effect']['tremolo']['mix'];
        root[0]['effect']['tremolo'].depth=root[now]['effect']['tremolo']['depth'];
        root[0]['effect']['tremolo'].speed=root[now]['effect']['tremolo']['speed'];
        if(root[now]['effect']['tremolo']['check']){
          if(!root[last]['effect']['tremolo']['check']){
            guitar.addEffect(root[0]['effect']['tremolo']);
          }
        }
        else{
          if(root[last]['effect']['tremolo']['check']){
            guitar.removeEffect(root[0]['effect']['tremolo']);
          }
        }
        //reverb
        root[0]['effect']['reverb'].mix=root[now]['effect']['reverb']['mix'];
        root[0]['effect']['reverb'].decay=root[now]['effect']['reverb']['decay'];
        root[0]['effect']['reverb'].time=root[now]['effect']['reverb']['time'];
        if(root[now]['effect']['reverb']['check']){
          if(!root[last]['effect']['reverb']['check']){
            guitar.addEffect(root[0]['effect']['reverb']);
          }
        }
        else{
          if(root[last]['effect']['reverb']['check']){
            guitar.removeEffect(root[0]['effect']['reverb']);
          }
        }
        //flanger
        root[0]['effect']['flanger'].mix=root[now]['effect']['flanger']['mix'];
        root[0]['effect']['flanger'].speed=root[now]['effect']['flanger']['speed'];
        root[0]['effect']['flanger'].depth=root[now]['effect']['flanger']['depth'];
        root[0]['effect']['flanger'].feedback=root[now]['effect']['flanger']['feedback'];
        root[0]['effect']['flanger'].time=root[now]['effect']['flanger']['time'];
        if(root[now]['effect']['flanger']['check']){
          if(!root[last]['effect']['flanger']['check']){
            guitar.addEffect(root[0]['effect']['flanger']);
          }
        }
        else{
          if(root[last]['effect']['flanger']['check']){
            guitar.removeEffect(root[0]['effect']['flanger']);
          }
        }
        //DubDelay
        root[0]['effect']['dubDelay'].mix=root[now]['effect']['dubDelay']['mix'];
        root[0]['effect']['dubDelay'].time=root[now]['effect']['dubDelay']['time'];
        root[0]['effect']['dubDelay'].cutoff=root[now]['effect']['dubDelay']['cutoff'];
        root[0]['effect']['dubDelay'].feedback=root[now]['effect']['dubDelay']['feedback'];
        if(root[now]['effect']['dubDelay']['check']){
          if(!root[last]['effect']['dubDelay']['check']){
            guitar.addEffect(root[0]['effect']['dubDelay']);
          }
        }
        else{
          if(root[last]['effect']['flanger']['check']){
            guitar.removeEffect(root[0]['effect']['dubDelay']);
          }
        }
        //PingPongDelay
        root[0]['effect']['pingPongDelay'].mix=root[now]['effect']['pingPongDelay']['mix'];
        root[0]['effect']['pingPongDelay'].time=root[now]['effect']['pingPongDelay']['time'];
        root[0]['effect']['pingPongDelay'].feedback=root[now]['effect']['pingPongDelay']['feedback'];
        if(root[now]['effect']['pingPongDelay']['check']){
          if(!root[last]['effect']['pingPongDelay']['check']){
            guitar.addEffect(root[0]['effect']['pingPongDelay']);
          }
        }
        else{
          if(root[last]['effect']['pingPongDelay']['check']){
            guitar.removeEffect(root[0]['effect']['pingPongDelay']);
          }
        }
        //compressor
        root[0]['effect']['compressor'].threshold=root[now]['effect']['compressor']['threshold'];
        root[0]['effect']['compressor'].knee=root[now]['effect']['compressor']['knee'];
        root[0]['effect']['compressor'].attack=root[now]['effect']['compressor']['attack'];
        root[0]['effect']['compressor'].release=root[now]['effect']['compressor']['release'];
        root[0]['effect']['compressor'].ratio=root[now]['effect']['compressor']['ratio'];
        if(root[now]['effect']['compressor']['check']){
          if(!root[last]['effect']['compressor']['check']){
            guitar.addEffect(root[0]['effect']['compressor']);
          }
        }
        else{
          if(root[last]['effect']['compressor']['check']){
            guitar.removeEffect(root[0]['effect']['compressor']);
          }
        }
        //chorus
        root[0]['effect']['chorus'].mix=root[now]['effect']['chorus']['mix'];
        if(root[now]['effect']['chorus']['check']){
          if(!root[last]['effect']['chorus']['check']){
            guitar.addEffect(root[0]['effect']['chorus']);
          }
        }
        else{
          if(root[last]['effect']['chorus']['check']){
            guitar.removeEffect(root[0]['effect']['chorus']);
          }
        }
        window.lastPreSet=this;
      }
    });
  }

}

var cabinet = new tuna.Cabinet({
    makeupGain: 1,
    impulsePath: "impulse/impulse_guitar.wav",
    bypass: 0
});
var convolver = new tuna.Convolver({
    highCut: 12000,
    lowCut: 20,
    dryLevel: 0.1,
    wetLevel: 0.1,
    level: 0.3,
    impulse: "impulse/impulse_rev.wav",
    bypass: 0
});

guitar.connect(cabinet);


for(var i=0;i<1;i++){
  root[i]['effect']['volume']= guitar;
  root[i]['effect']['gain']=new Pizzicato.Effects.Distortion();
  root[i]['effect']['gain'].gain=0;

  root[i]['effect']['bass'] = new tuna.Filter({
    frequency: 80,
    Q: 5,
    gain: 0,
    filterType: "lowshelf",
    bypass: 0
  });
  root[i]['effect']['treble'] = new tuna.Filter({
    frequency: 1300,
    Q: 5,
    gain: 0,
    filterType: "highshelf",
    bypass: 0
  });
  root[i]['effect']['middle'] = new tuna.Filter({
    frequency: 750, //20 to 22050
    Q: 5, //0.001 to 100
    gain: 0, //-40 to 40 (in decibels)
    filterType: "peaking", //lowpass, highpass, bandpass, lowshelf, highshelf, peaking, notch, allpass
    bypass: 0
  });
  root[i]['effect']['delay']=new Pizzicato.Effects.Delay({
    feedback: 0,
    time: 0,
    mix: 0
  });
  root[i]['effect']['distortion']= new tuna.Overdrive({
    outputGain: 0.7,         //0 to 1+
    drive: 1,              //0 to 1
    curveAmount: 0,          //0 to 1
    algorithmIndex: 0,       //0 to 5, selects one of our drive algorithms
    bypass: 0
});
  root[i]['effect']['ring']=new Pizzicato.Effects.RingModulator({
    speed: 0,
    distortion: 0,
    mix: 0
  });
  root[i]['effect']['tremolo']=new Pizzicato.Effects.Tremolo({
    speed: 0,
    depth: 0,
    mix: 0
  });
  root[i]['effect']['reverb']=new Pizzicato.Effects.Reverb({
    time: 0,
    decay: 0,
    reverse: false,
    mix: 0
  });
  root[i]['effect']['flanger']=new Pizzicato.Effects.Flanger({
    time: 0,
    speed: 0,
    depth: 0,
    feedback: 0,
    mix: 0
  });
  root[i]['effect']['dubDelay']=new Pizzicato.Effects.DubDelay({
    feedback: 0,
    time: 0,
    mix: 0,
    cutoff: 0
  });
  root[i]['effect']['pingPongDelay']=new Pizzicato.Effects.PingPongDelay({
    feedback: 0,
    time: 0,
    mix: 0
  });
  root[i]['effect']['compressor']=new Pizzicato.Effects.Compressor({
    threshold: -100,
    ratio: 1,
    release: 0,
    attack: 0,
    knee: 0,
  });
  root[i]['effect']['chorus']= new Pizzicato.Effects.Convolver({
    impulse: 'impulse/impulse_rev.wav',
    mix: 0
}, function() {
});

  guitar.addEffect(root[0]['effect']['gain']);
  cabinet.connect(root[i]['effect']['bass']);
  root[i]['effect']['bass'].connect(root[i]['effect']['middle']);
  root[i]['effect']['middle'].connect(root[i]['effect']['treble']);
  root[i]['effect']['treble'].connect(Pizzicato.context.destination);

  root[0]['effect']['distortion'].connect(Pizzicato.context.destination);
}

function buildPreSet(){
  for(var i=1;i<5;i++){
    root[i]['effect']=new Array();
    root[i]['effect']['volume']=0;
    root[i]['effect']['gain']=0;
    root[i]['effect']['bass']=0;
    root[i]['effect']['middle']=0;
    root[i]['effect']['treble']=0;
    root[i]['effect']['delay']=new Array();
    root[i]['effect']['delay']['feedback']=0;
    root[i]['effect']['delay']['time']=0;
    root[i]['effect']['delay']['mix']=0;
    root[i]['effect']['delay']['check']=false;
    root[i]['effect']['distortion']= new Array();
    root[i]['effect']['distortion']['check']=false;
    root[i]['effect']['distortion']['curve']=0;
    root[i]['effect']['distortion']['type']=0;
    root[i]['effect']['ring']= new Array();
    root[i]['effect']['ring']['check']=false;
    root[i]['effect']['ring']['speed']=0;
    root[i]['effect']['ring']['distortion']=0;
    root[i]['effect']['ring']['mix']=0;
    root[i]['effect']['tremolo']= new Array();
    root[i]['effect']['tremolo']['check']=false;
    root[i]['effect']['tremolo']['speed']=0;
    root[i]['effect']['tremolo']['depth']=0;
    root[i]['effect']['tremolo']['mix']=0;
    root[i]['effect']['reverb']= new Array();
    root[i]['effect']['reverb']['check']=false;
    root[i]['effect']['reverb']['time']=0;
    root[i]['effect']['reverb']['decay']=0;
    root[i]['effect']['reverb']['mix']=0;
    root[i]['effect']['flanger']= new Array();
    root[i]['effect']['flanger']['check']=false;
    root[i]['effect']['flanger']['time']=0;
    root[i]['effect']['flanger']['speed']=0;
    root[i]['effect']['flanger']['depth']=0;
    root[i]['effect']['flanger']['feedback']=0;
    root[i]['effect']['flanger']['mix']=0;
    root[i]['effect']['dubDelay']= new Array();
    root[i]['effect']['dubDelay']['check']=false;
    root[i]['effect']['dubDelay']['feedback']=0;
    root[i]['effect']['dubDelay']['time']=0;
    root[i]['effect']['dubDelay']['cutoff']=0;
    root[i]['effect']['dubDelay']['mix']=0;
    root[i]['effect']['pingPongDelay']= new Array();
    root[i]['effect']['pingPongDelay']['check']=false;
    root[i]['effect']['pingPongDelay']['feedback']=0;
    root[i]['effect']['pingPongDelay']['time']=0;
    root[i]['effect']['pingPongDelay']['mix']=0;
    root[i]['effect']['compressor']= new Array();
    root[i]['effect']['compressor']['check']=false;
    root[i]['effect']['compressor']['threshold']=-100;
    root[i]['effect']['compressor']['knee']=0;
    root[i]['effect']['compressor']['attack']=0;
    root[i]['effect']['compressor']['release']=0;
    root[i]['effect']['compressor']['ratio']=1;
    root[i]['effect']['chorus']= new Array();
    root[i]['effect']['chorus']['check']=false;
    root[i]['effect']['chorus']['mix']=0;
  }
}

function getRoot(){
  return window.root;
}
function checkSetPointer(){
  for(var i=1;i<5;i++){
    root[i]['effect']['chorus']['checkpointer']=$('#chorus_'+i+'_check');
    root[i]['effect']['delay']['checkpointer']=$('#delay_'+i+'_check');
    root[i]['effect']['distortion']['checkpointer']=$('#distortion_'+i+'_check');
    root[i]['effect']['ring']['checkpointer']=$('#ring_'+i+'_check');
    root[i]['effect']['tremolo']['checkpointer']=$('#tremolo_'+i+'_check');
    root[i]['effect']['flanger']['checkpointer']=$('#flanger_'+i+'_check');
    root[i]['effect']['reverb']['checkpointer']=$('#reverb_'+i+'_check');
    root[i]['effect']['dubDelay']['checkpointer']=$('#dubDelay_'+i+'_check');
    root[i]['effect']['pingPongDelay']['checkpointer']=$('#pingPongDelay_'+i+'_check');
    root[i]['effect']['compressor']['checkpointer']=$('#compressor_'+i+'_check');
  }
}
function checkSync(){
  for(var i=1;i<5;i++){
    console.log(i);
    if(root[i]['effect']['chorus']['check']){
      root[i]['effect']['chorus']['checkpointer'].click();
    }
    root[i]['effect']['chorus']['checkpointer'].on('click',function(){
      var i=$(this).val();
      root[i]['effect']['chorus']['check']=$(this).is(':checked');
      if(root[i]['effect']['chorus']['check']){
        guitar.addEffect(root[0]['effect']['chorus']);
        console.log("done");
      }
      else{
        guitar.removeEffect(root[0]['effect']['chorus']);
        console.log("undone");
      }
    });
    if(root[i]['effect']['delay']['check']){
      root[i]['effect']['delay']['checkpointer'].click();
    }
    root[i]['effect']['delay']['checkpointer'].on('click',function(){
      var i=$(this).val();
      root[i]['effect']['delay']['check']=$(this).is(':checked');
      console.log('ci sono');
      if(root[i]['effect']['delay']['check']){
        guitar.addEffect(root[0]['effect']['delay']);
        console.log("done");
      }
      else{
        guitar.removeEffect(root[0]['effect']['delay']);
        console.log("undone");
      }
    });
    if(root[i]['effect']['distortion']['check']){
      root[i]['effect']['distortion']['checkpointer'].click();
    }
    root[i]['effect']['distortion']['checkpointer'].on('click',function(){
      var i=$(this).val();
      root[i]['effect']['distortion']['check']=$(this).is(':checked');
      console.log('ci sono');
      if(root[i]['effect']['distortion']['check']){
        root[0]['effect']['treble'].disconnect(0);
        root[0]['effect']['treble'].connect(root[0]['effect']['distortion']);
        console.log("done");
      }
      else{
        root[0]['effect']['treble'].disconnect(0);
        root[0]['effect']['treble'].connect(Pizzicato.context.destination);
        console.log("undone");
      }
    });
    if(root[i]['effect']['ring']['check']){
      root[i]['effect']['ring']['checkpointer'].click();
    }
    root[i]['effect']['ring']['checkpointer'].on('click',function(){
      var i=$(this).val();
      root[i]['effect']['ring']['check']=$(this).is(':checked');
      console.log('ci sono');
      if(root[i]['effect']['ring']['check']){
        guitar.addEffect(root[0]['effect']['ring']);
        console.log("done");
      }
      else{
        guitar.removeEffect(root[0]['effect']['ring']);
        console.log("undone");
      }
    });
    if(root[i]['effect']['tremolo']['check']){
      root[i]['effect']['tremolo']['checkpointer'].click();
    }
    root[i]['effect']['tremolo']['checkpointer'].on('click',function(){
      var i=$(this).val();
      root[i]['effect']['tremolo']['check']=$(this).is(':checked');
      console.log('ci sono');
      if(root[i]['effect']['tremolo']['check']){
        guitar.addEffect(root[0]['effect']['tremolo']);
        console.log("done");
      }
      else{
        guitar.removeEffect(root[0]['effect']['tremolo']);
        console.log("undone");
      }
    });
    if(root[i]['effect']['flanger']['check']){
      root[i]['effect']['flanger']['checkpointer'].click();
    }
    root[i]['effect']['flanger']['checkpointer'].on('click',function(){
      var i=$(this).val();
      root[i]['effect']['flanger']['check']=$(this).is(':checked');
      console.log('ci sono');
      if(root[i]['effect']['flanger']['check']){
        guitar.addEffect(root[0]['effect']['flanger']);
        console.log("done");
      }
      else{
        guitar.removeEffect(root[0]['effect']['flanger']);
        console.log("undone");
      }
    });
    if(root[i]['effect']['reverb']['check']){
      root[i]['effect']['reverb']['checkpointer'].click();
    }
    root[i]['effect']['reverb']['checkpointer'].on('click',function(){
      var i=$(this).val();
      root[i]['effect']['reverb']['check']=$(this).is(':checked');
      console.log('ci sono');
      if(root[i]['effect']['reverb']['check']){
        guitar.addEffect(root[0]['effect']['reverb']);
        console.log("done");
      }
      else{
        guitar.removeEffect(root[0]['effect']['reverb']);
        console.log("undone");
      }
    });
    if(root[i]['effect']['dubDelay']['check']){
      root[i]['effect']['dubDelay']['checkpointer'].click();
    }
    root[i]['effect']['dubDelay']['checkpointer'].on('click',function(){
      var i=$(this).val();
      root[i]['effect']['dubDelay']['check']=$(this).is(':checked');
      console.log('ci sono');
      if(root[i]['effect']['dubDelay']['check']){
        guitar.addEffect(root[0]['effect']['dubDelay']);
        console.log("done");
      }
      else{
        guitar.removeEffect(root[0]['effect']['dubDelay']);
        console.log("undone");
      }
    });
    if(root[i]['effect']['pingPongDelay']['check']){
      root[i]['effect']['pingPongDelay']['checkpointer'].click();
    }
    root[i]['effect']['pingPongDelay']['checkpointer'].on('click',function(){
      var i=$(this).val();
      root[i]['effect']['pingPongDelay']['check']=$(this).is(':checked');
      console.log('ci sono');
      if(root[i]['effect']['pingPongDelay']['check']){
        guitar.addEffect(root[0]['effect']['pingPongDelay']);
        console.log("done");
      }
      else{
        guitar.removeEffect(root[0]['effect']['pingPongDelay']);
        console.log("undone");
      }
    });
    if(root[i]['effect']['compressor']['check']){
      root[i]['effect']['compressor']['checkpointer'].click();
    }
    root[i]['effect']['compressor']['checkpointer'].on('click',function(){
      var i=$(this).val();
      root[i]['effect']['compressor']['check']=$(this).is(':checked');
      console.log('ci sono');
      if(root[i]['effect']['compressor']['check']){
        guitar.addEffect(root[0]['effect']['compressor']);
        console.log("done");
      }
      else{
        guitar.removeEffect(root[0]['effect']['compressor']);
        console.log("undone");
      }
    });
  }
}
var px=76;
function setKnob(i){
  window.index=i;
  $("#Volume_"+i).knob(
    {
      'min':0,
      'max':1,
      'width':px,
      'height':px,
      'step':0.01,
      'displayInput':false,
      'thickness':0.3,
      'change':function(v){
        window.root[0]['effect']['volume'].volume=v;
        window.root[this.i[0].classList[0]]['effect']['volume']=v;
      }
    }
  );
  $("#Volume_"+i).val(root[i]['effect']['volume']).trigger('change');
  $("#Gain_"+i).knob(
    {
      'min':0,
      'max':1,
      'width':px,
      'height':px,
      'step':0.01,
      'displayInput':false,
      'thickness':0.3,
      'change':function(v){
        window.root[0]['effect']['gain'].gain=v;
        window.root[this.i[0].classList[0]]['effect']['gain']=v;
      }
    }
  );
  $("#Gain_"+i).val(root[i]['effect']['gain']).trigger('change');
  $("#Middle_"+i).knob(
    {
      'min':-30,
      'max':30,
      'width':px,
      'height':px,
      'step':0.01,
      'displayInput':false,
      'thickness':0.3,
      'change':function(v){
        window.root[0]['effect']['middle'].gain=v;
        window.root[this.i[0].classList[0]]['effect']['middle']=v;
      }
    }
  );
  $("#Middle_"+i).val(root[i]['effect']['middle']).trigger('change');
  $("#Bass_"+i).knob(
    {
      'min':-30,
      'max':30,
      'width':px,
      'height':px,
      'step':0.01,
      'displayInput':false,
      'thickness':0.3,
      'change':function(v){
          window.root[0]['effect']['bass'].gain=v;
          window.root[this.i[0].classList[0]]['effect']['bass']=v;
      }
    }
  );
  $("#Bass"+i).val(root[i]['effect']['bass']).trigger('change');
  $("#Treble_"+i).knob(
    {
      'min':-30,
      'max':30,
      'width':px,
      'height':px,
      'step':0.01,
      'displayInput':false,
      'thickness':0.3,
      'change':function(v){
          window.root[0]['effect']['treble'].gain=v;
          window.root[this.i[0].classList[0]]['effect']['treble']=v;
      }
    }
  );
  $("#Treble_"+i).val(root[i]['effect']['treble']).trigger('change');
  $("#chorus_mix_"+i).knob({
    'min':0,
    'max':1,
    'width':px,
    'height':px,
    'step':0.01,
    'displayInput':false,
    'thickness':0.3,
    'change':function(v){
      window.root[0]['effect']['chorus'].mix=v;
      window.root[this.i[0].classList[0]]['effect']['chorus']['mix']=v;
    }
  });
  $("#chorus_mix_"+i).val(root[i]['effect']['chorus']['mix']).trigger('change');
  $("#Delay_Feedback_"+i).knob(
    {
      'min':0,
      'max':1,
      'width':px,
      'height':px,
      'step':0.01,
      'displayInput':false,
      'thickness':0.3,
      'change':function(v){
        window.root[0]['effect']['delay'].feedback=v;
        window.root[this.i[0].classList[0]]['effect']['delay']['feedback']=v;
      }
    }
  );
  $("#Delay_Feedback_"+i).val(root[i]['effect']['delay']['feedback']).trigger('change');
  $("#Delay_Time_"+i).knob(
    {
      'min':0,
      'max':1,
      'width':px,
      'height':px,
      'step':0.01,
      'displayInput':false,
      'thickness':0.3,
      'change':function(v){
        window.root[0]['effect']['delay'].time=v;
        window.root[this.i[0].classList[0]]['effect']['delay']['time']=v;
      }
    }
  );
  $("#Delay_Time_"+i).val(root[i]['effect']['delay']['time']).trigger('change');
  $("#Delay_Mix_"+i).knob(
    {
      'min':0,
      'max':1,
      'width':px,
      'height':px,
      'step':0.01,
      'displayInput':false,
      'thickness':0.3,
      'change':function(v){
        window.root[0]['effect']['delay'].mix=v;
        window.root[this.i[0].classList[0]]['effect']['delay']['mix']=v;
      }
    }
  );
  $("#Delay_Mix_"+i).val(root[i]['effect']['delay']['mix']).trigger('change');
  $("#Distortion_curve_"+i).knob({
    'min':0,
    'max':1,
    'width':px,
    'height':px,
    'displayInput':false,
    'step':0.01,
    'thickness':0.3,
    'change':function(v){
      window.root[0]['effect']['distortion'].curveAmount=v;
      window.root[this.i[0].classList[0]]['effect']['distortion']['curve']=v;
    }
  });
  $("#Distortion_curve_"+i).val(root[i]['effect']['distortion']['curve']).trigger('change');
  $("#Distortion_type_"+i).knob({
    'min':0,
    'max':2,
    'width':px,
    'height':px,
    'step':1,
    'displayInput':true,
    'thickness':0.3,
    'change':function(v){
      window.root[0]['effect']['distortion'].algorithmIndex=Math.round(v);
      window.root[this.i[0].classList[0]]['effect']['distortion']['type']=v;
    }
  });
  $("#Distortion_type_"+i).val(root[i]['effect']['distortion']['type']).trigger('change');
  $("#Ring_speed_"+i).knob({
    'min':0,
    'max':2000,
    'width':px,
    'height':px,
    'step':1,
    'displayInput':false,
    'thickness':0.3,
    'change':function(v){
      window.root[0]['effect']['ring'].speed=v;
      window.root[this.i[0].classList[0]]['effect']['ring']['speed']=v;
    }
  });
  $("#Ring_speed_"+i).val(root[i]['effect']['ring']['speed']).trigger('change');
  $("#Ring_distortion_"+i).knob({
    'min':0,
    'max':50,
    'width':px,
    'height':px,
    'step':0.1,
    'displayInput':false,
    'thickness':0.3,
    'change':function(v){
      window.root[0]['effect']['ring'].distortion=v;
      window.root[this.i[0].classList[0]]['effect']['ring']['distortion']=v;
    }
  });
  $("#Ring_distortion_"+i).val(root[i]['effect']['ring']['distortion']).trigger('change');
  $("#Ring_mix_"+i).knob({
    'min':0,
    'max':1,
    'width':px,
    'height':px,
    'step':0.01,
    'displayInput':false,
    'thickness':0.3,
    'change':function(v){
      window.root[0]['effect']['ring'].mix=v;
      window.root[this.i[0].classList[0]]['effect']['ring']['mix']=v;
    }
  });
  $("#Ring_mix_"+i).val(root[i]['effect']['ring']['mix']).trigger('change');
  $("#Tremolo_mix_"+i).knob({
    'min':0,
    'max':1,
    'width':px,
    'height':px,
    'step':0.01,
    'displayInput':false,
    'thickness':0.3,
    'change':function(v){
      window.root[0]['effect']['tremolo'].mix=v;
      window.root[this.i[0].classList[0]]['effect']['tremolo']['mix']=v;
    }
  });
  $("#Tremolo_mix_"+i).val(root[i]['effect']['tremolo']['mix']).trigger('change');
  $("#Tremolo_depth_"+i).knob({
    'min':0,
    'max':1,
    'width':px,
    'height':px,
    'step':0.01,
    'displayInput':false,
    'thickness':0.3,
    'change':function(v){
      window.root[0]['effect']['tremolo'].depth=v;
      window.root[this.i[0].classList[0]]['effect']['tremolo']['depth']=v;
    }
  });
  $("#Tremolo_depth_"+i).val(root[i]['effect']['tremolo']['depth']).trigger('change');
  $("#Tremolo_speed_"+i).knob({
    'min':0,
    'max':20,
    'width':px,
    'height':px,
    'step':0.01,
    'displayInput':false,
    'thickness':0.3,
    'change':function(v){
      window.root[0]['effect']['tremolo'].speed=v;
      window.root[this.i[0].classList[0]]['effect']['tremolo']['speed']=v;
    }
  });
  $("#Tremolo_speed_"+i).val(root[i]['effect']['tremolo']['speed']).trigger('change');
  $("#Reverb_time_"+i).knob({
    'min':0,
    'max':3,
    'width':px,
    'height':px,
    'step':0.01,
    'displayInput':false,
    'thickness':0.3,
    'change':function(v){
      window.root[0]['effect']['reverb'].time=v;
      window.root[this.i[0].classList[0]]['effect']['reverb']['time']=v;
    }
  });
  $("#Reverb_time_"+i).val(root[i]['effect']['reverb']['time']).trigger('change');
  $("#Reverb_decay_"+i).knob({
    'min':0,
    'max':3,
    'width':px,
    'height':px,
    'step':0.01,
    'displayInput':false,
    'thickness':0.3,
    'change':function(v){
      window.root[0]['effect']['reverb'].decay=v;
      window.root[this.i[0].classList[0]]['effect']['reverb']['decay']=v;
    }
  });
  $("#Reverb_decay_"+i).val(root[i]['effect']['reverb']['decay']).trigger('change');
  $("#Reverb_mix_"+i).knob({
    'min':0,
    'max':1,
    'width':px,
    'height':px,
    'step':0.01,
    'displayInput':false,
    'thickness':0.3,
    'change':function(v){
      window.root[0]['effect']['reverb'].mix=v;
      window.root[this.i[0].classList[0]]['effect']['reverb']['mix']=v;
    }
  });
  $("#Reverb_mix_"+i).val(root[i]['effect']['reverb']['mix']).trigger('change');
  $("#Flanger_time_"+i).knob({
    'min':0,
    'max':1,
    'width':px,
    'height':px,
    'step':0.01,
    'displayInput':false,
    'thickness':0.3,
    'change':function(v){
      window.root[0]['effect']['flanger'].time=v;
      window.root[this.i[0].classList[0]]['effect']['flanger']['time']=v;
    }
  });
  $("#Flanger_time_"+i).val(root[i]['effect']['flanger']['time']).trigger('change');
  $("#Flanger_depth_"+i).knob({
    'min':0,
    'max':1,
    'width':px,
    'height':px,
    'step':0.01,
    'displayInput':false,
    'thickness':0.3,
    'change':function(v){
      window.root[0]['effect']['flanger'].depth=v;
      window.root[this.i[0].classList[0]]['effect']['flanger']['depth']=v;
    }
  });
  $("#Flanger_depth_"+i).val(root[i]['effect']['flanger']['depth']).trigger('change');
  $("#Flanger_speed_"+i).knob({
    'min':0,
    'max':1,
    'width':px,
    'height':px,
    'step':0.01,
    'displayInput':false,
    'thickness':0.3,
    'change':function(v){
      window.root[0]['effect']['flanger'].speed=v;
      window.root[this.i[0].classList[0]]['effect']['flanger']['speed']=v;
    }
  });
  $("#Flanger_speed_"+i).val(root[i]['effect']['flanger']['speed']).trigger('change');
  $("#Flanger_feedback_"+i).knob({
    'min':0,
    'max':1,
    'width':px,
    'height':px,
    'step':0.01,
    'displayInput':false,
    'thickness':0.3,
    'change':function(v){
      window.root[0]['effect']['flanger'].feedback=v;
      window.root[this.i[0].classList[0]]['effect']['flanger']['feedback']=v;
    }
  });
  $("#Flanger_feedback_"+i).val(root[i]['effect']['flanger']['feedback']).trigger('change');
  $("#Flanger_mix_"+i).knob({
    'min':0,
    'max':1,
    'width':px,
    'height':px,
    'step':0.01,
    'displayInput':false,
    'thickness':0.3,
    'change':function(v){
      window.root[0]['effect']['flanger'].mix=v;
      window.root[this.i[0].classList[0]]['effect']['flanger']['mix']=v;
    }
  });
  $("#Flanger_mix_"+i).val(root[i]['effect']['flanger']['mix']).trigger('change');
  $("#DubDelay_feedback_"+i).knob({
    'min':0,
    'max':1,
    'width':px,
    'height':px,
    'step':0.01,
    'displayInput':false,
    'thickness':0.3,
    'change':function(v){
      window.root[0]['effect']['dubDelay'].feedback=v;
      window.root[this.i[0].classList[0]]['effect']['dubDelay']['feedback']=v;
    }
  });
  $("#DubDelay_feedback_"+i).val(root[i]['effect']['dubDelay']['feedback']).trigger('change');
  $("#DubDelay_time_"+i).knob({
    'min':0,
    'max':5,
    'width':px,
    'height':px,
    'step':0.01,
    'displayInput':false,
    'thickness':0.3,
    'change':function(v){
      window.root[0]['effect']['dubDelay'].time=v;
      window.root[this.i[0].classList[0]]['effect']['dubDelay']['time']=v;
    }
  });
  $("#DubDelay_time_"+i).val(root[i]['effect']['dubDelay']['time']).trigger('change');
  $("#DubDelay_cutoff_"+i).knob({
    'min':0,
    'max':4000,
    'width':px,
    'height':px,
    'step':0.1,
    'displayInput':false,
    'thickness':0.3,
    'change':function(v){
      window.root[0]['effect']['dubDelay'].cutoff=v;
      window.root[this.i[0].classList[0]]['effect']['dubDelay']['cutoff']=v;
    }
  });
  $("#DubDelay_cutoff_"+i).val(root[i]['effect']['dubDelay']['cutoff']).trigger('change');
  $("#DubDelay_mix_"+i).knob({
    'min':0,
    'max':1,
    'width':px,
    'height':px,
    'step':0.01,
    'displayInput':false,
    'thickness':0.3,
    'change':function(v){
      window.root[0]['effect']['dubDelay'].mix=v;
      window.root[this.i[0].classList[0]]['effect']['dubDelay']['mix']=v;
    }
  });
  $("#DubDelay_mix_"+i).val(root[i]['effect']['dubDelay']['mix']).trigger('change');
  $("#PingPongDelay_feedback_"+i).knob({
    'min':0,
    'max':1,
    'width':px,
    'height':px,
    'step':0.01,
    'displayInput':false,
    'thickness':0.3,
    'change':function(v){
      window.root[0]['effect']['pingPongDelay'].feedback=v;
      window.root[this.i[0].classList[0]]['effect']['pingPongDelay']['feedback']=v;
    }
  });
  $("#PingPongDelay_feedback_"+i).val(root[i]['effect']['pingPongDelay']['feedback']).trigger('change');
  $("#PingPongDelay_time_"+i).knob({
    'min':0,
    'max':5,
    'width':px,
    'height':px,
    'step':0.01,
    'displayInput':false,
    'thickness':0.3,
    'change':function(v){
      window.root[0]['effect']['pingPongDelay'].time=v;
      window.root[this.i[0].classList[0]]['effect']['pingPongDelay']['time']=v;
    }
  });
  $("#PingPongDelay_time_"+i).val(root[i]['effect']['pingPongDelay']['time']).trigger('change');
  $("#PingPongDelay_mix_"+i).knob({
    'min':0,
    'max':1,
    'width':px,
    'height':px,
    'step':0.01,
    'displayInput':false,
    'thickness':0.3,
    'change':function(v){
      window.root[0]['effect']['pingPongDelay'].mix=v;
      window.root[this.i[0].classList[0]]['effect']['pingPongDelay']['mix']=v;
    }
  });
  $("#PingPongDelay_mix_"+i).val(root[i]['effect']['pingPongDelay']['mix']).trigger('change');
  $("#Compressor_threshold_"+i).knob({
    'min':-100,
    'max':0,
    'width':px,
    'height':px,
    'step':0.01,
    'displayInput':false,
    'thickness':0.3,
    'change':function(v){
      window.root[0]['effect']['compressor'].threshold=v;
      window.root[this.i[0].classList[0]]['effect']['compressor']['threshold']=v;
    }
  });
  $("#Compressor_threshold_"+i).val(root[i]['effect']['compressor']['threshold']).trigger('change');
  $("#Compressor_knee"+"_"+i).knob({
    'min':0,
    'max':40,
    'width':px,
    'height':px,
    'step':0.01,
    'displayInput':false,
    'thickness':0.3,
    'change':function(v){
      window.root[0]['effect']['compressor'].knee=v;
      window.root[this.i[0].classList[0]]['effect']['compressor']['knee']=v;
    }
  });
  $("#Compressor_knee_"+i).val(root[i]['effect']['compressor']['knee']).trigger('change');
  $("#Compressor_attack"+"_"+i).knob({
    'min':0,
    'max':1,
    'width':px,
    'height':px,
    'step':0.01,
    'displayInput':false,
    'thickness':0.3,
    'change':function(v){
      window.root[0]['effect']['compressor'].attack=v;
      window.root[this.i[0].classList[0]]['effect']['compressor']['attack']=v;
    }
  });
  $("#Compressor_attack_"+i).val(root[i]['effect']['compressor']['attack']).trigger('change');
  $("#Compressor_release"+"_"+i).knob({
    'min':0,
    'max':1,
    'width':px,
    'height':px,
    'step':0.01,
    'displayInput':false,
    'thickness':0.3,
    'change':function(v){
      window.root[0]['effect']['compressor'].release=v;
      window.root[this.i[0].classList[0]]['effect']['compressor']['release']=v;
    }
  });
  $("#Compressor_release_"+i).val(root[i]['effect']['compressor']['release']).trigger('change');
  $("#Compressor_Ratio"+"_"+i).knob({
    'min':1,
    'max':20,
    'width':px,
    'height':px,
    'step':0.01,
    'displayInput':false,
    'thickness':0.3,
    'change':function(v){
      window.root[0]['effect']['compressor'].ratio=v;
      window.root[this.i[0].classList[0]]['effect']['compressor']['radio']=v;
    }
  });
  $("#Compressor_Ratio_"+i).val(root[i]['effect']['compressor']['ratio']).trigger('change');
}
function loadPreSet(){
  root[0]['effect']['volume'].volume=root[1]['effect']['volume'];
  root[0]['effect']['gain'].gain=root[1]['effect']['gain'];
  root[0]['effect']['bass'].gain=root[1]['effect']['bass'];
  root[0]['effect']['middle'].gain=root[1]['effect']['middle'];
  root[0]['effect']['treble'].gain=root[1]['effect']['treble'];
  //delay
  root[0]['effect']['delay'].feedback=root[1]['effect']['delay']['feedback'];
  root[0]['effect']['delay'].time=root[1]['effect']['delay']['time'];
  root[0]['effect']['delay'].mix=root[1]['effect']['delay']['mix'];
  if(root[1]['effect']['delay']['check']){
    guitar.addEffect(root[0]['effect']['delay']);
  }
  //distortion
  root[0]['effect']['distortion'].drive=root[1]['effect']['distortion']['curve'];
  root[0]['effect']['delay'].type=root[1]['effect']['distortion']['type'];
  if(root[1]['effect']['distortion']['check']){
    root[0]['effect']['treble'].disconnect(0);
    root[0]['effect']['treble'].connect(root[0]['effect']['distortion']);
  }
  //ring
  root[0]['effect']['ring'].speed=root[1]['effect']['ring']['speed'];
  root[0]['effect']['ring'].distortion=root[1]['effect']['ring']['distortion'];
  root[0]['effect']['ring'].mix=root[1]['effect']['ring']['mix'];
  if(root[1]['effect']['ring']['check']){
    guitar.addEffect(root[0]['effect']['ring']);
  }
  //tremolo
  root[0]['effect']['tremolo'].speed=root[1]['effect']['tremolo']['speed'];
  root[0]['effect']['tremolo'].depth=root[1]['effect']['tremolo']['depth'];
  root[0]['effect']['tremolo'].mix=root[1]['effect']['tremolo']['mix'];
  if(root[1]['effect']['tremolo']['check']){
    guitar.addEffect(root[0]['effect']['tremolo']);
  }
  //reverb
  root[0]['effect']['reverb'].time=root[1]['effect']['tremolo']['time'];
  root[0]['effect']['reverb'].decay=root[1]['effect']['tremolo']['decay'];
  root[0]['effect']['reverb'].mix=root[1]['effect']['tremolo']['mix'];
  if(root[1]['effect']['reverb']['check']){
    guitar.addEffect(root[0]['effect']['reverb']);
  }
  //flanger
  root[0]['effect']['flanger'].time=root[1]['effect']['flanger']['time'];
  root[0]['effect']['flanger'].speed=root[1]['effect']['flanger']['speed'];
  root[0]['effect']['flanger'].depth=root[1]['effect']['flanger']['depth'];
  root[0]['effect']['flanger'].feedback=root[1]['effect']['flanger']['feedback'];
  root[0]['effect']['flanger'].mix=root[1]['effect']['flanger']['mix'];
  if(root[1]['effect']['flanger']['check']){
    guitar.addEffect(root[0]['effect']['flanger']);
  }
  //dubDelay
  root[0]['effect']['dubDelay'].time=root[1]['effect']['dubDelay']['time'];
  root[0]['effect']['dubDelay'].cutoff=root[1]['effect']['dubDelay']['cutoff'];
  root[0]['effect']['dubDelay'].feedback=root[1]['effect']['dubDelay']['feedback'];
  root[0]['effect']['dubDelay'].mix=root[1]['effect']['dubDelay']['mix'];
  if(root[1]['effect']['dubDelay']['check']){
    guitar.addEffect(root[0]['effect']['dubDelay']);
  }
  //pingPongDelay
  root[0]['effect']['pingPongDelay'].time=root[1]['effect']['pingPongDelay']['time'];
  root[0]['effect']['pingPongDelay'].feedback=root[1]['effect']['pingPongDelay']['feedback'];
  root[0]['effect']['pingPongDelay'].mix=root[1]['effect']['pingPongDelay']['mix'];
  if(root[1]['effect']['pingPongDelay']['check']){
    guitar.addEffect(root[0]['effect']['pingPongDelay']);
  }
  //compressor
  root[0]['effect']['compressor'].threshold=root[1]['effect']['compressor']['threshold'];
  root[0]['effect']['compressor'].knee=root[1]['effect']['compressor']['knee'];
  root[0]['effect']['compressor'].attack=root[1]['effect']['compressor']['attack'];
  root[0]['effect']['compressor'].release=root[1]['effect']['compressor']['release'];
  root[0]['effect']['compressor'].ratio=root[1]['effect']['compressor']['ratio'];
  if(root[1]['effect']['compressor']['check']){
    guitar.addEffect(root[0]['effect']['compressor']);
  }
  //chorus
  root[0]['effect']['chorus'].mix=root[1]['effect']['chorus']['mix'];
  if(root[1]['effect']['chorus']['check']){
    guitar.addEffect(root[0]['effect']['chorus']);
  }
}
(function($){
  $(function(){
    buildPreSet();
    //building preset data
    setKnob(1);
    setKnob(2);
    setKnob(3);
    setKnob(4);
    //setting knob
    checkSetPointer();
    //setting checks input's pointer
    checkSync();
    //linking checkboxs
    addSwitchingSet();
    //settim fuction for the switching
    loadPreSet(); //loading first preset
    $('.button-collapse').sideNav();
    console.log("prova");
  });
})(jQuery);
