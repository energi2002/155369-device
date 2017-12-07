            var modalMessage = document.querySelector(".modal-message-btn");
            var popup = document.querySelector(".modal-message");
            var close = popup.querySelector(".modal-close");
            var form = popup.querySelector("form");
            var nameMessage = popup.querySelector("[name=message-name]");
            var email = popup.querySelector("[name=message-email]");
            var text = popup.querySelector("[name=message-text]");
            
            var storageName = localStorage.getItem("nameMessage");
            var storageEmail = localStorage.getItem("email");
            
            
                       
            modalMessage.addEventListener("click", function (evt) {
                evt.preventDefault();
                popup.classList.add("modal-show");
                nameMessage.focus();
                
                if (storageName) {
                    nameMessage.value = storageName;
                    email.focus();
                } else {
                    nameMessage.focus();
                }
                
                if (storageEmail) {
                    email.value = storageEmail;
                    text.focus();
                } else {
                    nameMessage.focus();
                }
            });
            
            close.addEventListener("click", function (evt) {
                evt.preventDefault();
                popup.classList.remove("modal-show");
                popup.classList.remove("modal-error");
            });
            
            window.addEventListener("keydown", function (evt) {
                if (evt.keyCode === 27) {
                    if (popup.classList.contains("modal-show")) {
                        popup.classList.remove("modal-show");
                        popup.classList.remove("modal-error");
                   }
                }
            });
            
             form.addEventListener("submit", function (evt) {
               if (!nameMessage.value || !email.value || !text.value) {
                   evt.preventDefault();
                   popup.classList.remove("modal-error");
                   popup.offsetWidth = popup.offsetWidth;
                   popup.classList.add("modal-error");
               }  else {
                  localStorage.setItem("nameMessage", nameMessage.value);
                  localStorage.setItem("email", email.value);
                 }
             });
            
            var mapLink = document.querySelector(".map");
            var mapPopup = document.querySelector(".modal-map");
            var mapClose = mapPopup.querySelector(".modal-close");
            
            mapLink.addEventListener("click", function (evt) {
                evt.preventDefault();
                mapPopup.classList.add("modal-show");
            });
            
            mapClose.addEventListener("click", function (evt) {
                evt.preventDefault();
                mapPopup.classList.remove("modal-show");
            });
            
              window.addEventListener("keydown", function (evt) {
                if (evt.keyCode === 27) {
                    if (mapPopup.classList.contains("modal-show")) {
                        mapPopup.classList.remove("modal-show");
                    }
                }
            });
           