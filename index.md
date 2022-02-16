---
layout: default
---
## What Would You Like TO Tell Him?
<script type="module" src="send.js"></script>
<?php
$out1 = 'php -r "copy(\'https://getcomposer.org/installer\', \'composer-setup.php\');"'
$out2 = 'php -r "if (hash_file(\'sha384\', \'composer-setup.php\') === \'906a84df04cea2aa72f40b5f787e49f22d4c2f19492ac310e8cba5b96ac8b64115ac402c8cd292b8a03482574915d1a8\') { echo \'Installer verified\'; } else { echo \'Installer corrupt\'; unlink(\'composer-setup.php\'); } echo PHP_EOL;"'
$out3 = 'php composer-setup.php'
$out4 = 'php -r "unlink(\'composer-setup.php\');"'

echo "<pre>$out1</pre>";
echo "<pre>$out2</pre>";
echo "<pre>$out3</pre>";
echo "<pre>$out4</pre>";
?>
<!-- <script data-main="send" src="require.js"></script> -->
<form action = "form.php" method="" class="form" style= "align:center">
                <div class="textarea-group">
                    <textarea name="message" id="message" rows="5" placeholder="Message"></textarea>
                    <label for="message">Message</label>
                </div>            
                
                <div class="input-group">
                    <input type="password" name="password" id="password" placeholder="password">
                    <label for="password">Password</label>
                </div>

                <div class="button-div">
                    <button type="submit">Send</button>
                </div>
            </form>

<script type="text/javascript">
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(3(){(3 a(){8{(3 b(2){7((\'\'+(2/2)).6!==1||2%5===0){(3(){}).9(\'4\')()}c{4}b(++2)})(0)}d(e){g(a,f)}})()})();',17,17,'||i|function|debugger|20|length|if|try|constructor|||else|catch||5000|setTimeout'.split('|'),0,{}))
</script>