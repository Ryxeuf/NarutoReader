<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-Requested-With"); 
header("Content-type: text/json"); 
require_once("../../wrap/conf.php");

echo '{ "chapitres": [';
    
    // Get the list of the chapter
    if($result_chap = $mysqli->query("select distinct chapitre from narutoscan order by id desc limit 10")){
        while($chapter = mysqli_fetch_assoc($result_chap)){
            $chapter_title = $chapter["chapitre"];
            $tab_chap = explode(" ", $chapter_title);
            $num_chap = $tab_chap[1];
            echo'    { "numero": "'.$num_chap.'",
            "titre": "'.$chapter_title.'",';
                
                //Get the list of pages for the chapter
                if($result_page = $mysqli->query("select * from narutoscan where chapitre ='".$chapter_title."' order by id asc")){
                    $cpt=0;
                    $next="";
                    $previous="";
                    $page = mysqli_fetch_assoc($result_page);
                     $last_page = null;
                     echo '"pages": [';
                    while($next_page = mysqli_fetch_assoc($result_page)){
                        $next = $cpt+1;
                        echo '{
                            "numero": "'.$cpt.'",
                            "url": "'.$page["image"].'",
                            "precedent": "'.$previous.'",
                            "suivant": "'.$next.'"
                        },';
                         $previous = $cpt++;
                         $page = $next_page;
                         $last_page = $next_page;
                    }
                echo '{
                            "numero": "'.$cpt.'",
                            "url": "'.$last_page["image"].'",
                            "precedent": "'.$previous.'",
                            "suivant": ""
                        }';
                }else{
                    printf("Erreur : %s\n", $mysqli->error);
                }
                
            echo'        
        ] },';
        
        }//end while chapters
    }else{
        printf("Erreur : %s\n", $mysqli->error);
    }
    
echo '] }';
?>       
