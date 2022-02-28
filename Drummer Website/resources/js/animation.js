                        let i= 0;

                        function count(){
                            i++;
                            if($(window).width()>900){
                                if(i==0){
                                    document.getElementById("slide1").style.display = "initial";
                                    document.getElementById("slide2").style.display = "initial";
                                    document.getElementById("slide3").style.display = "initial";
                                    document.getElementById("slide4").style.display = "none";
                                    document.getElementById("slide5").style.display = "none";
                                    document.getElementById("slide6").style.display = "none";
                                    document.getElementById("slide7").style.display = "none";
                                    document.getElementById("slide8").style.display = "none";
                                    console.log(i);
                                    return 0;
                                }
                                else if(i==1){
                                    document.getElementById("slide1").style.display = "none";
                                    document.getElementById("slide2").style.display = "none";
                                    document.getElementById("slide3").style.display = "none";
                                    document.getElementById("slide4").style.display = "initial";
                                    document.getElementById("slide5").style.display = "initial";
                                    document.getElementById("slide6").style.display = "initial";
                                    document.getElementById("slide7").style.display = "none";
                                    document.getElementById("slide8").style.display = "none";
                                    console.log(i);
                                    return 0;
                                }
                                else if(i==2){
                                    document.getElementById("slide1").style.display = "none";
                                    document.getElementById("slide2").style.display = "none";
                                    document.getElementById("slide3").style.display = "none";
                                    document.getElementById("slide4").style.display = "none";
                                    document.getElementById("slide5").style.display = "none";
                                    document.getElementById("slide6").style.display = "none";
                                    document.getElementById("slide7").style.display = "initial";
                                    document.getElementById("slide8").style.display = "none";
                                    console.log(i);
                                    return 0;
                                }
                                else if(i==3){
                                    document.getElementById("slide1").style.display = "none";
                                    document.getElementById("slide2").style.display = "none";
                                    document.getElementById("slide3").style.display = "none";
                                    document.getElementById("slide4").style.display = "none";
                                    document.getElementById("slide5").style.display = "none";
                                    document.getElementById("slide6").style.display = "none";
                                    document.getElementById("slide7").style.display = "none";
                                    document.getElementById("slide8").style.display = "initial";
                                    console.log(i);
                                    return 0;
                                }
                                else{
                                    document.getElementById("slide1").style.display = "initial";
                                    document.getElementById("slide2").style.display = "initial";
                                    document.getElementById("slide3").style.display = "initial";
                                    document.getElementById("slide4").style.display = "none";
                                    document.getElementById("slide5").style.display = "none";
                                    document.getElementById("slide6").style.display = "none";
                                    document.getElementById("slide7").style.display = "none";
                                    document.getElementById("slide8").style.display = "none";
                                    i=0;
                                    console.log(i);
                                    return 0;
                                }
                            }
                            else if($(window).width()<=480){
                            if(i==0){
                                document.getElementById("slide1").style.display = "initial";
                                document.getElementById("slide2").style.display = "none";
                                document.getElementById("slide3").style.display = "none";
                                document.getElementById("slide4").style.display = "none";
                                document.getElementById("slide5").style.display = "none";
                                document.getElementById("slide6").style.display = "none";
                                document.getElementById("slide7").style.display = "none";
                                document.getElementById("slide8").style.display = "none";
                                console.log(i);
                                return 0;
                            }
                            else if(i==1){
                                document.getElementById("slide1").style.display = "none";
                                document.getElementById("slide2").style.display = "initial";
                                document.getElementById("slide3").style.display = "none";
                                document.getElementById("slide4").style.display = "none";
                                document.getElementById("slide5").style.display = "none";
                                document.getElementById("slide6").style.display = "none";
                                document.getElementById("slide7").style.display = "none";
                                document.getElementById("slide8").style.display = "none";
                                console.log(i);
                                return 0;
                            }
                            else if(i==2){
                                document.getElementById("slide1").style.display = "none";
                                document.getElementById("slide2").style.display = "none";
                                document.getElementById("slide3").style.display = "initial";
                                document.getElementById("slide4").style.display = "none";
                                document.getElementById("slide5").style.display = "none";
                                document.getElementById("slide6").style.display = "none";
                                document.getElementById("slide7").style.display = "none";
                                document.getElementById("slide8").style.display = "none";
                                console.log(i);
                                return 0;
                            }
                            else if(i==3){
                                document.getElementById("slide1").style.display = "none";
                                document.getElementById("slide2").style.display = "none";
                                document.getElementById("slide3").style.display = "none";
                                document.getElementById("slide4").style.display = "initial";
                                document.getElementById("slide5").style.display = "none";
                                document.getElementById("slide6").style.display = "none";
                                document.getElementById("slide7").style.display = "none";
                                document.getElementById("slide8").style.display = "none";
                                console.log(i);
                                return 0;
                            }
                            else if(i==4){
                                document.getElementById("slide1").style.display = "none";
                                document.getElementById("slide2").style.display = "none";
                                document.getElementById("slide3").style.display = "none";
                                document.getElementById("slide4").style.display = "none";
                                document.getElementById("slide5").style.display = "initial";
                                document.getElementById("slide6").style.display = "none";
                                document.getElementById("slide7").style.display = "none";
                                document.getElementById("slide8").style.display = "none";
                                console.log(i);
                                return 0;
                            }
                            else if(i==5){
                                document.getElementById("slide1").style.display = "none";
                                document.getElementById("slide2").style.display = "none";
                                document.getElementById("slide3").style.display = "none";
                                document.getElementById("slide4").style.display = "none";
                                document.getElementById("slide5").style.display = "none";
                                document.getElementById("slide6").style.display = "initial";
                                document.getElementById("slide7").style.display = "none";
                                document.getElementById("slide8").style.display = "none";
                                console.log(i);
                                return 0;
                            }
                            else if(i==6){
                                document.getElementById("slide1").style.display = "none";
                                document.getElementById("slide2").style.display = "none";
                                document.getElementById("slide3").style.display = "none";
                                document.getElementById("slide4").style.display = "none";
                                document.getElementById("slide5").style.display = "none";
                                document.getElementById("slide6").style.display = "none";
                                document.getElementById("slide7").style.display = "initial";
                                document.getElementById("slide8").style.display = "none";
                                console.log(i);
                                return 0;
                            }
                            else if(i==7){
                                document.getElementById("slide1").style.display = "none";
                                document.getElementById("slide2").style.display = "none";
                                document.getElementById("slide3").style.display = "none";
                                document.getElementById("slide4").style.display = "none";
                                document.getElementById("slide5").style.display = "none";
                                document.getElementById("slide6").style.display = "none";
                                document.getElementById("slide7").style.display = "none";
                                document.getElementById("slide8").style.display = "initial";
                                console.log(i);
                                return 0;
                            }
                            else{
                                document.getElementById("slide1").style.display = "initial";
                                document.getElementById("slide2").style.display = "none";
                                document.getElementById("slide3").style.display = "none";
                                document.getElementById("slide4").style.display = "none";
                                document.getElementById("slide5").style.display = "none";
                                document.getElementById("slide6").style.display = "none";
                                document.getElementById("slide7").style.display = "none";
                                document.getElementById("slide8").style.display = "none";
                                i=0;
                                console.log(i);
                                return 0;
                            }
                        }
                        else if($(window).width()<=900 && $(window).width()>480){
                            if(i==0){
                                document.getElementById("slide1").style.display = "initial";
                                document.getElementById("slide2").style.display = "initial";
                                document.getElementById("slide3").style.display = "none";
                                document.getElementById("slide4").style.display = "none";
                                document.getElementById("slide5").style.display = "none";
                                document.getElementById("slide6").style.display = "none";
                                document.getElementById("slide7").style.display = "none";
                                document.getElementById("slide8").style.display = "none";
                                console.log(i);
                                return 0;
                            }
                            else if(i==1){
                                document.getElementById("slide1").style.display = "none";
                                document.getElementById("slide2").style.display = "none";
                                document.getElementById("slide3").style.display = "initial";
                                document.getElementById("slide4").style.display = "initial";
                                document.getElementById("slide5").style.display = "none";
                                document.getElementById("slide6").style.display = "none";
                                document.getElementById("slide7").style.display = "none";
                                document.getElementById("slide8").style.display = "none";
                                console.log(i);
                                return 0;
                            }
                            else if(i==2){
                                document.getElementById("slide1").style.display = "none";
                                document.getElementById("slide2").style.display = "none";
                                document.getElementById("slide3").style.display = "none";
                                document.getElementById("slide4").style.display = "none";
                                document.getElementById("slide5").style.display = "initial";
                                document.getElementById("slide6").style.display = "initial";
                                document.getElementById("slide7").style.display = "none";
                                document.getElementById("slide8").style.display = "none";
                                console.log(i);
                                return 0;
                            }
                            else if(i==3){
                                document.getElementById("slide1").style.display = "none";
                                document.getElementById("slide2").style.display = "none";
                                document.getElementById("slide3").style.display = "none";
                                document.getElementById("slide4").style.display = "none";
                                document.getElementById("slide5").style.display = "none";
                                document.getElementById("slide6").style.display = "none";
                                document.getElementById("slide7").style.display = "initial";
                                document.getElementById("slide8").style.display = "none";
                                console.log(i);
                                return 0;
                            }
                            else if(i==4){
                                document.getElementById("slide1").style.display = "none";
                                document.getElementById("slide2").style.display = "none";
                                document.getElementById("slide3").style.display = "none";
                                document.getElementById("slide4").style.display = "none";
                                document.getElementById("slide5").style.display = "none";
                                document.getElementById("slide6").style.display = "none";
                                document.getElementById("slide7").style.display = "none";
                                document.getElementById("slide8").style.display = "initial";
                                console.log(i);
                                return 0;
                            }
                            else{
                                document.getElementById("slide1").style.display = "initial";
                                document.getElementById("slide2").style.display = "initial";
                                document.getElementById("slide3").style.display = "none";
                                document.getElementById("slide4").style.display = "none";
                                document.getElementById("slide5").style.display = "none";
                                document.getElementById("slide6").style.display = "none";
                                document.getElementById("slide7").style.display = "none";
                                document.getElementById("slide8").style.display = "none";
                                i=0;
                                console.log(i);
                                return 0;
                            }
                        }
                    }
                        function decount(){
                                i--;
                                if($(window).width()>900){
                                    if(i==0){
                                    document.getElementById("slide1").style.display = "initial";
                                    document.getElementById("slide2").style.display = "initial";
                                    document.getElementById("slide3").style.display = "initial";
                                    document.getElementById("slide4").style.display = "none";
                                    document.getElementById("slide5").style.display = "none";
                                    document.getElementById("slide6").style.display = "none";
                                    document.getElementById("slide7").style.display = "none";
                                    document.getElementById("slide8").style.display = "none";
                                        console.log(i);
                                    return 0;
                                }
                                else if(i==1){
                                    document.getElementById("slide1").style.display = "none";
                                    document.getElementById("slide2").style.display = "none";
                                    document.getElementById("slide3").style.display = "none";
                                    document.getElementById("slide4").style.display = "initial";
                                    document.getElementById("slide5").style.display = "initial";
                                    document.getElementById("slide6").style.display = "initial";
                                    document.getElementById("slide7").style.display = "none";
                                    document.getElementById("slide8").style.display = "none";
                                    console.log(i);
                                    return 0;
                                }
                                else if(i==2){
                                    document.getElementById("slide1").style.display = "none";
                                    document.getElementById("slide2").style.display = "none";
                                    document.getElementById("slide3").style.display = "none";
                                    document.getElementById("slide4").style.display = "none";
                                    document.getElementById("slide5").style.display = "none";
                                    document.getElementById("slide6").style.display = "none";
                                    document.getElementById("slide7").style.display = "initial";
                                    document.getElementById("slide8").style.display = "none";
                                    console.log(i);
                                    return 0;
                                }
                                else if(i==3){
                                    document.getElementById("slide1").style.display = "none";
                                    document.getElementById("slide2").style.display = "none";
                                    document.getElementById("slide3").style.display = "none";
                                    document.getElementById("slide4").style.display = "none";
                                    document.getElementById("slide5").style.display = "none";
                                    document.getElementById("slide6").style.display = "none";
                                    document.getElementById("slide7").style.display = "none";
                                    document.getElementById("slide8").style.display = "initial";
                                    console.log(i);
                                    return 0;
                                }
                                else{
                                    document.getElementById("slide1").style.display = "none";
                                    document.getElementById("slide2").style.display = "none";
                                    document.getElementById("slide3").style.display = "none";
                                    document.getElementById("slide4").style.display = "none";
                                    document.getElementById("slide5").style.display = "none";
                                    document.getElementById("slide6").style.display = "none";
                                    document.getElementById("slide7").style.display = "none";
                                    document.getElementById("slide8").style.display = "initial";
                                    i=3;
                                    console.log(i);
                                    return 0;
                                }
                            }
                            else if($(window).width()<=900 && $(window).width()>480){
                            if(i==0){
                                document.getElementById("slide1").style.display = "initial";
                                document.getElementById("slide2").style.display = "initial";
                                document.getElementById("slide3").style.display = "none";
                                document.getElementById("slide4").style.display = "none";
                                document.getElementById("slide5").style.display = "none";
                                document.getElementById("slide6").style.display = "none";
                                document.getElementById("slide7").style.display = "none";
                                document.getElementById("slide8").style.display = "none";
                                console.log(i);
                                return 0;
                            }
                            else if(i==1){
                                document.getElementById("slide1").style.display = "none";
                                document.getElementById("slide2").style.display = "none";
                                document.getElementById("slide3").style.display = "initial";
                                document.getElementById("slide4").style.display = "initial";
                                document.getElementById("slide5").style.display = "none";
                                document.getElementById("slide6").style.display = "none";
                                document.getElementById("slide7").style.display = "none";
                                document.getElementById("slide8").style.display = "none";
                                console.log(i);
                                return 0;
                            }
                            else if(i==2){
                                document.getElementById("slide1").style.display = "none";
                                document.getElementById("slide2").style.display = "none";
                                document.getElementById("slide3").style.display = "none";
                                document.getElementById("slide4").style.display = "none";
                                document.getElementById("slide5").style.display = "initial";
                                document.getElementById("slide6").style.display = "initial";
                                document.getElementById("slide7").style.display = "none";
                                document.getElementById("slide8").style.display = "none";
                                console.log(i);
                                return 0;
                            }
                            else if(i==3){
                                document.getElementById("slide1").style.display = "none";
                                document.getElementById("slide2").style.display = "none";
                                document.getElementById("slide3").style.display = "none";
                                document.getElementById("slide4").style.display = "none";
                                document.getElementById("slide5").style.display = "none";
                                document.getElementById("slide6").style.display = "none";
                                document.getElementById("slide7").style.display = "initial";
                                document.getElementById("slide8").style.display = "none";
                                console.log(i);
                                return 0;
                            }
                            else if(i==4){
                                document.getElementById("slide1").style.display = "none";
                                document.getElementById("slide2").style.display = "none";
                                document.getElementById("slide3").style.display = "none";
                                document.getElementById("slide4").style.display = "none";
                                document.getElementById("slide5").style.display = "none";
                                document.getElementById("slide6").style.display = "none";
                                document.getElementById("slide7").style.display = "none";
                                document.getElementById("slide8").style.display = "initial";
                                console.log(i);
                                return 0;
                            }
                            else{
                                document.getElementById("slide1").style.display = "none";
                                document.getElementById("slide2").style.display = "none";
                                document.getElementById("slide3").style.display = "none";
                                document.getElementById("slide4").style.display = "none";
                                document.getElementById("slide5").style.display = "none";
                                document.getElementById("slide6").style.display = "none";
                                document.getElementById("slide7").style.display = "none";
                                document.getElementById("slide8").style.display = "initial";
                                i=4;
                                console.log(i);
                                return 0;
                            }
                        }
                            else if($(window).width()<=480){
                            if(i==0){
                                document.getElementById("slide1").style.display = "initial";
                                document.getElementById("slide2").style.display = "none";
                                document.getElementById("slide3").style.display = "none";
                                document.getElementById("slide4").style.display = "none";
                                document.getElementById("slide5").style.display = "none";
                                document.getElementById("slide6").style.display = "none";
                                document.getElementById("slide7").style.display = "none";
                                document.getElementById("slide8").style.display = "none";
                                console.log(i);
                                return 0;
                            }
                            else if(i==1){
                                document.getElementById("slide1").style.display = "none";
                                document.getElementById("slide2").style.display = "initial";
                                document.getElementById("slide3").style.display = "none";
                                document.getElementById("slide4").style.display = "none";
                                document.getElementById("slide5").style.display = "none";
                                document.getElementById("slide6").style.display = "none";
                                document.getElementById("slide7").style.display = "none";
                                document.getElementById("slide8").style.display = "none";
                                console.log(i);
                                return 0;
                            }
                            else if(i==2){
                                document.getElementById("slide1").style.display = "none";
                                document.getElementById("slide2").style.display = "none";
                                document.getElementById("slide3").style.display = "initial";
                                document.getElementById("slide4").style.display = "none";
                                document.getElementById("slide5").style.display = "none";
                                document.getElementById("slide6").style.display = "none";
                                document.getElementById("slide7").style.display = "none";
                                document.getElementById("slide8").style.display = "none";
                                console.log(i);
                                return 0;
                            }
                            else if(i==3){
                                document.getElementById("slide1").style.display = "none";
                                document.getElementById("slide2").style.display = "none";
                                document.getElementById("slide3").style.display = "none";
                                document.getElementById("slide4").style.display = "initial";
                                document.getElementById("slide5").style.display = "none";
                                document.getElementById("slide6").style.display = "none";
                                document.getElementById("slide7").style.display = "none";
                                document.getElementById("slide8").style.display = "none";
                                console.log(i);
                                return 0;
                            }
                            else if(i==4){
                                document.getElementById("slide1").style.display = "none";
                                document.getElementById("slide2").style.display = "none";
                                document.getElementById("slide3").style.display = "none";
                                document.getElementById("slide4").style.display = "none";
                                document.getElementById("slide5").style.display = "initial";
                                document.getElementById("slide6").style.display = "none";
                                document.getElementById("slide7").style.display = "none";
                                document.getElementById("slide8").style.display = "none";
                                console.log(i);
                                return 0;
                            }
                            else if(i==5){
                                document.getElementById("slide1").style.display = "none";
                                document.getElementById("slide2").style.display = "none";
                                document.getElementById("slide3").style.display = "none";
                                document.getElementById("slide4").style.display = "none";
                                document.getElementById("slide5").style.display = "none";
                                document.getElementById("slide6").style.display = "initial";
                                document.getElementById("slide7").style.display = "none";
                                document.getElementById("slide8").style.display = "none";
                                console.log(i);
                                return 0;
                            }
                            else if(i==6){
                                document.getElementById("slide1").style.display = "none";
                                document.getElementById("slide2").style.display = "none";
                                document.getElementById("slide3").style.display = "none";
                                document.getElementById("slide4").style.display = "none";
                                document.getElementById("slide5").style.display = "none";
                                document.getElementById("slide6").style.display = "none";
                                document.getElementById("slide7").style.display = "initial";
                                document.getElementById("slide8").style.display = "none";
                                console.log(i);
                                return 0;
                            }
                            else if(i==7){
                                document.getElementById("slide1").style.display = "none";
                                document.getElementById("slide2").style.display = "none";
                                document.getElementById("slide3").style.display = "none";
                                document.getElementById("slide4").style.display = "none";
                                document.getElementById("slide5").style.display = "none";
                                document.getElementById("slide6").style.display = "none";
                                document.getElementById("slide7").style.display = "none";
                                document.getElementById("slide8").style.display = "initial";
                                console.log(i);
                                return 0;
                            }
                            else{
                                document.getElementById("slide1").style.display = "none";
                                document.getElementById("slide2").style.display = "none";
                                document.getElementById("slide3").style.display = "none";
                                document.getElementById("slide4").style.display = "none";
                                document.getElementById("slide5").style.display = "none";
                                document.getElementById("slide6").style.display = "none";
                                document.getElementById("slide7").style.display = "none";
                                document.getElementById("slide8").style.display = "initial";
                                i=7;
                                console.log(i);
                                return 0;
                            }
                        }
                        }

                    
