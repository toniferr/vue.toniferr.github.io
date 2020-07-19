<template>
        <section class="experience" id="experience">
            <div id="page-wrap">            
                <!--<img src="../assets/img/experience/cthulu.png" alt="Photo of Cthulu" id="pic" />            -->
                <div id="contact-info" class="vcard">                
                    <h1 class="fn">Education & Experience</h1>
                </div>
                
                <div class="clear"></div>
                
                <dl>
                    <dd class="clear"></dd>
                    
                    <dt>Education</dt>
                    <dd>
                        <h2>University of Vigo <span>2012-2016</span></h2>
                        <p>Computer engineering degree<br /></p>
                    </dd>
                    
                    <dd class="clear"></dd>
                    
                    <dt>Experience</dt>
                    <dd>
                        <h2>Bahia Software S.L.  <span><strong>Intern</strong> (2016 - 2017)</span></h2><br>
                        <h2>  <span><strong>Junior software developer</strong> (2017 - 2019)</span></h2><br>
                        <h2>  <span><strong>Senior software developer</strong> (2019 - actually)</span></h2><br>
                        
                    </dd>
                    
                    <dd class="clear"></dd>
                    
                    <dt>Skills</dt>
                    <dd>
                        <h2>Tecnologies</h2>
                        <p>*******************************</p>
                        
                        <h2>Aplications/programs</h2>
                        <p>*******************************</p>
                    </dd>
                </dl>                
                <div class="clear"></div>   
                <hr>         
            </div>
        </section>    
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .experience {
     background-image: url('/assets/img/experience/noise.jpg)');}
    .clear { clear: both; }
    .vcard { text-align: center;}
    #page-wrap { width: 800px; margin: 40px auto 60px; font: 16px Helvetica, Sans-Serif; line-height: 24px; }
    #pic { float: right; margin: -30px 0 0 0; }
    h1 { margin: 0 0 16px 0; padding: 0 0 16px 0; font-size: 42px; font-weight: bold; letter-spacing: -2px; border-bottom: 1px solid #999; }
    h2 { font-size: 20px; margin: 0 0 6px 0; position: relative; }
    h2 span { position: absolute; bottom: 0; right: 0; font-style: italic; font-family: Georgia, Serif; font-size: 16px; color: #999; font-weight: normal; }
    p { margin: 0 0 16px 0; }
    a { color: #999; text-decoration: none; border-bottom: 1px dotted #999; }
    a:hover { border-bottom-style: solid; color: black; }
    ul { margin: 0 0 32px 17px; }
    #objective p { font-family: Georgia, Serif; font-style: italic; color: #666; }
    dt { font-style: italic; font-weight: bold; font-size: 18px; text-align: right; padding: 0 26px 0 0; width: 150px; float: left; height: 100px; border-right: 1px solid #999;  }
    dd { width: 600px; float: right; }
    dd.clear { float: none; margin: 0; height: 15px; }
</style>