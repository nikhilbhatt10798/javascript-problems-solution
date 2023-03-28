<?php


    function is_valid_datetime($fromDateTime, $toDateTime = null){
        //current timezone 
        date_default_timezone_set("Asia/Calcutta");
        //current date Time
        $currentDateTime =  Date("Y-m-d H:i:s");
        $currentDate = Date('Y-m-d');
        $currentTime = Date('h:i A');
        
        //from date 
        $startDateTimeOBJ =new DateTime($fromDateTime);
        $startDate = $startDateTimeOBJ->format('Y-m-d');
        $startTime =  $startDateTimeOBJ->format('h:i A');
        //to date
        $endDateTime  = new DateTime($toDateTime);
        //time limit 
        $timeLimit = "09:00 AM";
        //  $timeLimit = "09:00 PM";
        if($startDate == $currentDate ){
            if( strtotime($startTime)>= strtotime($timeLimit)){
                return true;
            }else{
                return false;
            }
        }else{
           
            $MakeCurrentDateObj =new DateTime($startDate);
            $MakeCurrentDay = $MakeCurrentDateObj->modify('+1 day')->format('Y-m-d');
            if($startDate != $currentDate && $MakeCurrentDay==$currentDate){
        //  echo strtotime($currentTime) ."\n";
        //  echo strtotime($timeLimit)."\n";
        //  echo strtotime($currentTime) < strtotime($timeLimit);
                    if(strtotime($currentTime) < strtotime($timeLimit)){
                        return true;
                    }else{
                        return false;
                    }
            }
            if($startDate != $currentDate && $MakeCurrentDay<$currentDate){
                return false;
            }
            if($startDate != $currentDate && $MakeCurrentDay>$currentDate){
                return false;
            }
        }
    }
    $isValide = is_valid_datetime('2023-03-28 21:39:00 ','2023-03-29 10:01:00');
    var_dump( $isValide );
?>
