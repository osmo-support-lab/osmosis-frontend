(function(w,d){
  w.HelpCrunch=function(){w.HelpCrunch.q.push(arguments)};w.HelpCrunch.q=[];
  function r(){var s=document.createElement('script');s.async=1;s.type='text/javascript';s.src='https://widget.helpcrunch.com/';(d.body||d.head).appendChild(s);}
  if(w.attachEvent){w.attachEvent('onload',r)}else{w.addEventListener('load',r,false)}
})(window, document)

  HelpCrunch('init', 'osmosis', {
    applicationId: 2,
    applicationSecret: 'u6HgWn/+VcdB4um54rte6+CDaI8CYn+AgpGLDPScPAjMZkUMcHBeu0m8bi00MzuPH0h0i2fFPcr1hR7/pfm9Ow=='
  })

  HelpCrunch('showChatWidget');
