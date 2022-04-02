function firstTimeCall() {
  if ((getMessageNotification(), $("#userOrderList").length)) {
    var e = $("#filter").val();
    setTimeout(function () {
      showUserOrders(e, 1);
    }, 3e3);
  }
  setTimeout("getOrderConversation()", 1e3),
    $("#wholeTutorList").length > 0 && filterExpert(1);
}
function supportAjaxUploadWithProgress() {
  return (
    ((t = document.createElement("INPUT")).type = "file"),
    "files" in t &&
      !!(
        (e = new XMLHttpRequest()) &&
        "upload" in e &&
        "onprogress" in e.upload
      ) &&
      !!window.FormData
  );
  var e, t;
}
function configureProgressFile(e) {
  var t = document.getElementById(e.fileId),
    a = document.getElementById(e.fileButtonId);
  null != t &&
    null != a &&
    (a.addEventListener(
      "click",
      function (e) {
        t && t.click(), e.preventDefault();
      },
      !1
    ),
    t.addEventListener(
      "change",
      function () {
        traverseFiles(this.files, e.fileResultId, e.fileUploadOrigin);
      },
      !1
    ));
}
function configureNormalFile() {
  $("#fileUploadType").html(
    '<input type="file" name="fileUploadnormal" id="fileUploadnormal"/>'
  ),
    uploadAttachment();
}
function uploadAttachment() {
  $("#fileUploadnormal").bind("change", function () {
    var e = new Date();
    ajaxFileUpload(
      "fileUploadnormal",
      [e.getMinutes(), e.getSeconds(), e.getMilliseconds()].join(""),
      ["php", "sh", "java", "exe"]
    );
  });
}
function ajaxFileUpload(e, t, a) {
  fileCount++;
  var s = domainUrl + "/orders/upload.php?id=" + e;
  return (
    $.ajaxFileUpload({
      url: s,
      secureuri: !1,
      fileElementId: e,
      dataType: "json",
      ext: a,
      data: { name: "logan", id: "id" },
      success: function (e, a) {
        if ("success" == e.status) {
          if (e.fileName.length > 25) var s = e.fileName.substr(0, 25);
          else s = e.fileName;
          $("#fileUpload").append(
            '<div class="file_upload_data" id="fileUpload' +
              t +
              '"><div class="file_uploadleft"><p title="' +
              e.fileName +
              '"><b>' +
              s +
              "</b> (" +
              e.fileSize +
              'K)</p></div><div class="file_uploadright"><a href="javascript:void(0);" onclick="deleteFile(\'' +
              t +
              '\');">Delete</a><input type="hidden" id="fileId' +
              t +
              '" name="fileId[]" value="' +
              e.filePath +
              '"/><input type="hidden" id="fileName' +
              t +
              '" name="fileName[]" value="' +
              e.fileName +
              '"/></div></div>'
          );
        }
      },
      error: function (e, t, a) {
        alert("error");
      },
    }),
    uploadAttachment(),
    !0
  );
}
function traverseFiles(e, t, a) {
  if (fileCount <= 5)
    if (void 0 !== e) {
      if (e.length <= 5)
        for (var s = 0, r = e.length; s < r; s++) {
          var n = new Date(),
            i = [n.getMinutes(), n.getSeconds(), n.getMilliseconds()].join("");
          uploadFile(e[s], i, t, a);
        }
    } else document.getElementById("file-list").innerHTML = "Not support";
}
function progress(e, t) {
  var a = (e * t.width()) / 100;
  t.find("div").animate({ width: a }, 500);
}
function validateOrderNowForm() {
  $("#orderBt").prop("disabled", !0);
  var e = (error1 = error2 = error3 = error4 = error5 = !0),
    t = $("#email_form"),
    a = $("#deadline_form"),
    s = $("#subject_form"),
    r = $("#pageQty_form"),
    n = $("#references_form"),
    i = $("#requirements_form"),
    o = $.trim(t.val()),
    l = $.trim(a.val()),
    d = $.trim(s.val());
  return (
    $.trim(r.val()),
    $.trim(n.val()),
    $.trim(i.val()),
    "" == o || !validateEmail(o) || o.length > 100
      ? (t.removeClass("inputSuccess").addClass("animated shake shake-error"),
        setTimeout(function () {
          t.removeClass("animated shake");
        }, 1e3),
        t.focus(),
        (e = !0))
      : (t.removeClass("shake-error").addClass("inputSuccess"), (e = !1)),
    "" == l
      ? (a.removeClass("inputSuccess").addClass("animated shake shake-error"),
        setTimeout(function () {
          a.removeClass("animated shake");
        }, 1e3),
        e || a.focus(),
        (error1 = !0))
      : (a.removeClass("shake-error").addClass("inputSuccess"), (error1 = !1)),
    "" == d
      ? (s.removeClass("inputSuccess").addClass("animated shake shake-error"),
        setTimeout(function () {
          s.removeClass("animated shake");
        }, 1e3),
        e || error1 || s.focus(),
        (error2 = !0))
      : (s.removeClass("shake-error").addClass("inputSuccess"), (error2 = !1)),
    !(e || error1 || error2) || ($("#orderBt").prop("disabled", !1), !1)
  );
}
function validateEmail(e) {
  return (
    0 != /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(e)
  );
}
function doLoginCheck() {
  var e = !0;
  return (
    (e = !emailValidate("email", $.trim($("#email").val()))),
    "" == $("#password").val()
      ? ($("#password").addClass("shake-error"),
        $("#password").addClass("animated shake"),
        setTimeout(function () {
          $("#password").removeClass("animated shake");
        }, 1e3),
        (e = !0))
      : $("#password").removeClass("shake-error"),
    !e
  );
}
function emailValidate(e, t) {
  return validateEmail(t)
    ? ($("#" + e).removeClass("shake-error"), !0)
    : ($("#" + e).addClass("shake-error"),
      $("#" + e).addClass("animated shake"),
      $("#" + e).addClass("shake-error"),
      setTimeout(function () {
        $("#" + e).removeClass("animated shake");
      }, 1e3),
      !1);
}
function showUserOrders(e, t) {
  $("#orderListLoader").show(),
    $("#orderList").hide(),
    e || (e = "all"),
    (url = UpdateQueryString("filter", e)),
    history.pushState && window.history.pushState({ path: url }, "", url),
    $.ajax({
      type: "POST",
      url: domainUrl + "/dashboard/showClientOrder.php",
      data: $.param({ filter: e, pageNo: t }),
      dataType: "json",
      success: function (t) {
        $("#orderList").html(t.summary).show(),
          $("#orderListLoader").hide(),
          $(".nav").find(".active").removeClass("active"),
          $("#" + e).addClass("active");
      },
      async: !0,
    });
}
function UpdateQueryString(e, t, a) {
  a || (a = window.location.href);
  var s,
    r = new RegExp("([?&])" + e + "=.*?(&|#|$)(.*)", "gi");
  if (r.test(a))
    return null != t
      ? a.replace(r, "$1" + e + "=" + t + "$2$3")
      : ((s = a.split("#")),
        (a = s[0].replace(r, "$1$3").replace(/(&|\?)$/, "")),
        void 0 !== s[1] && null !== s[1] && (a += "#" + s[1]),
        a);
  if (null != t) {
    var n = -1 !== a.indexOf("?") ? "&" : "?";
    return (
      (s = a.split("#")),
      (a = s[0] + n + e + "=" + t),
      void 0 !== s[1] && null !== s[1] && (a += "#" + s[1]),
      a
    );
  }
  return a;
}
function validateAndChangePassword() {
  var e = !0;
  $("#changePasswordModal").button({ loadingText: "Procesing ..." }),
    $("#changePasswordModal").button("loading");
  var t = $.trim($("#password").val()),
    a = $.trim($("#password1").val());
  if (
    ("" == t
      ? ($("#password").removeClass("inputSuccess"),
        $("#password").addClass("animated shake shake-error"),
        setTimeout(function () {
          $("#password").removeClass("animated shake");
        }, 1e3),
        $("#password").focus(),
        (e = !0))
      : ($("#password").removeClass("shake-error").addClass("inputSuccess"),
        (e = !1)),
    "" == a
      ? ($("#password1").removeClass("inputSuccess"),
        $("#password1").addClass("animated shake shake-error"),
        setTimeout(function () {
          $("#password1").removeClass("animated shake");
        }, 1e3),
        $("#password1").focus(),
        (e = !0))
      : ($("#password1").removeClass("shake-error").addClass("inputSuccess"),
        (e = !1)),
    t != a
      ? ($("#rpassErr").html("Passwords do no match").removeClass("d-none"),
        (e = !0))
      : $("#rpassErr").addClass("d-none"),
    e)
  )
    return $("#changePasswordButton").button("reset"), !1;
  $("#changePasswordModal").button("loading"),
    $.ajax({
      type: "POST",
      url: domainUrl + "/dashboard/changePassword.php",
      data: $.param({ password: t, password1: a }),
      dataType: "json",
      success: function (e) {
        $("#changePasswordButton").button("reset"),
          "error" == e.status
            ? $.smkAlert({ text: "Please Try Again", type: "error" })
            : "success" == e.status
            ? ($.smkAlert({ text: e.msg, type: "success" }),
              $("#change-password-modal").modal("hide"))
            : document.location.reload();
      },
      async: !0,
    });
}
function subscribeForm() {
  var e = !1;
  $("#subscriberBtn").prop("disabled", !0);
  var t = $("#subscriberEmail"),
    a = $.trim(t.val());
  return (
    "" == a || !validateEmail(a) || a.length > 100
      ? (t.closest("div").addClass("has-danger shake-error"), (e = !0))
      : t.closest("div").removeClass("has-danger shake-error"),
    e
      ? ($("#subscriberBtn").prop("disabled", !1), !1)
      : ($.ajax({
          type: "POST",
          url: "/subscriberEmail.php",
          data: $.param({ email: a }),
          dataType: "html",
          success: function (e) {
            "success" == $.trim(e)
              ? ($("#footerform").hide(),
                $(".footer-subscribe").append(
                  "<div class='alert alert-success'><i class='fa fa-check'></i> You have successfully subscribed for special offers.</div>"
                ))
              : "exist" == $.trim(e)
              ? ($("#footerform").hide(),
                $(".footer-subscribe").append(
                  "<div class='alert alert-warning'><i class='fa fa-check'></i> You have already subscribed for special offers.</div>"
                ))
              : ($("#subscriberEmail").addClass("animated shake"),
                $("#subscriberEmail").addClass("shake-error"),
                setTimeout(function () {
                  $("#subscriberEmail").removeClass("animated shake");
                }, 1e3));
          },
          async: !0,
        }),
        !1)
  );
}
function sendMessageByUser(e) {
  var t = $("input[name='fileId[]']")
      .map(function () {
        return $(this).val();
      })
      .get(),
    a = $("input[name='fileName[]']")
      .map(function () {
        return $(this).val();
      })
      .get(),
    s = $.trim($("input[name='receiver']:checked").val()),
    r = $.trim($("#msg").val());
  $("#emailErr").remove(),
    r
      ? ($("#sendMessageButton").button("loading"),
        $.ajax({
          type: "POST",
          url: domainUrl + "/dashboard/sendMessageOrderPage.php",
          data: $.param({
            fileId: t,
            fileName: a,
            aid: e,
            receiver: s,
            msg: r,
          }),
          dataType: "json",
          success: function (e) {
            $("#sendMessageButton").button("reset"),
              "success" == e.status
                ? (getOrderConversation(),
                  $("#msg").val(""),
                  $("#fileUpload3").html(""))
                : "error" == e.status && swal({ text: "error" });
          },
          async: !0,
        }))
      : $("#msg")
          .parent()
          .append(
            '<span id="emailErr" class="validetta-bubble validetta-bubble--bottom" style="top:190px;left:15px;">Please Enter Valid Message.<br></span>'
          );
}
function getOrderConversation() {
  if ($("#encOrderId").length) {
    var e = $.trim($("#encOrderId").val());
    $.ajax({
      type: "POST",
      url: domainUrl + "/dashboard/showConversation.php",
      data: $.param({ aid: e }),
      dataType: "html",
      success: function (e) {
        $("#userConversationSection").empty().html(e);
      },
      async: !0,
    }),
      setTimeout(function () {
        getOrderConversation();
      }, 1e3);
  }
}
function sendForgotPasswordEmail() {
  $("#resetPassword").button("loading");
  var e = $.trim($("#frgtPass").val());
  if ("" == e || !validateEmail(e))
    return $("#frgtPass").closest("div").addClass("has-danger shake-error"), !1;
  $("#frgtPass").closest("div").removeClass("has-danger shake-error"),
    $.ajax({
      type: "POST",
      url: "/orders/sendFrgtPassword.php",
      data: $.param({ email: e }),
      dataType: "html",
      success: function (e) {
        "success" == $.trim(e)
          ? ($(".notification_reset_pwd").css("display", "block"),
            $(".forget-hide").hide(),
            $(".notification_email_err").hide())
          : $(".notification_email_err").html(
              "<div class='notification_reset_error'><h5>Invalid Email Id</h5></div>"
            );
      },
      async: !0,
    });
}
function orderInvoice(e, t, a, s) {
  $(".oOrderId").html(a),
    $("#currencyCode").val(t),
    $("#orderAmount").val(e),
    $("#InvoiceOrderId").val(a),
    $("#invoiceModal").modal("show"),
    $(".oAmount").html(e + " " + t),
    $(".oSubject").html(s);
}
function updateProfileData() {
  var e = $("#first-name");
  "" == $.trim(e.val())
    ? (e.removeClass("inputSuccess").addClass("animated shake shake-error"),
      setTimeout(function () {
        e.removeClass("animated shake");
      }, 1e3),
      e.focus())
    : e.removeClass("shake-error").addClass("inputSuccess");
}
function changeUserPassword() {
  var e = (error1 = error2 = !1),
    t = $("#pwd"),
    a = $("#newPwd"),
    s = $("#conPwd"),
    r = $.trim(t.val()),
    n = $.trim(a.val()),
    i = $.trim(s.val());
  return (
    "" == r
      ? (t.removeClass("inputSuccess").addClass("animated shake shake-error"),
        setTimeout(function () {
          t.removeClass("animated shake");
        }, 1e3),
        t.focus(),
        (e = !0))
      : (t.removeClass("shake-error").addClass("inputSuccess"), (e = !1)),
    "" == n
      ? (a.removeClass("inputSuccess").addClass("animated shake shake-error"),
        setTimeout(function () {
          a.removeClass("animated shake");
        }, 1e3),
        e || a.focus(),
        (error1 = !0))
      : (a.removeClass("shake-error").addClass("inputSuccess"), (error1 = !1)),
    "" == i
      ? (s.removeClass("inputSuccess").addClass("animated shake shake-error"),
        setTimeout(function () {
          s.removeClass("animated shake");
        }, 1e3),
        (e && error1) || s.focus(),
        (error1 = !0))
      : (s.removeClass("shake-error").addClass("inputSuccess"), (error1 = !1)),
    !(e || error1 || error2)
  );
}
function downloadSolution(e) {
  $.ajax({
    type: "POST",
    url: domainUrl + "/dashboard/downloadSolution.php",
    data: $.param({ aid: e }),
    dataType: "html",
    success: function (e) {
      "success" == $.trim(e) &&
        $.smkAlert({
          text: "Solution downloaded successfully",
          type: "success",
        });
    },
    async: !0,
  });
}
function sendVerificationMail() {
  $.ajax({
    type: "POST",
    url: "/dashboard/sendEmailVerification.php",
    dataType: "html",
    success: function (e) {},
    async: !0,
  });
}
function verifyEmailCode() {
  var e = $.trim($("#emailCode").val());
  "" == e
    ? $("#emailCode").after(
        '<div class="error">Please Enter Verification Code.</div>'
      )
    : ($("#submitEmail").button("loading"),
      $.ajax({
        type: "POST",
        url: "/dashboard/verifyEmailCode.php",
        data: $.param({ emailCode: e }),
        dataType: "json",
        success: function (e) {
          "error" == e.status
            ? ($.smkAlert({ text: e.msg, type: "error" }),
              $("#submitEmail").button("reset"),
              $("#emailCode").val(""))
            : ($.smkAlert({ text: e.msg, type: "success" }),
              $("#eamilVerify").hide());
        },
        async: !0,
      }));
}
function getMessageNotification() {
  $.ajax({
    type: "POST",
    url: domainUrl + "/dashboard/getMessageNotification.php",
    dataType: "html",
    success: function (e) {
      $("#messageNotification").html(e);
    },
  }),
    setTimeout(function () {
      getMessageNotification();
    }, 1e4);
}
function claimFunction(e, t) {
  var a,
    s = new Date();
  s.setTime(s.getTime() + 864e5),
    (a = "; expires=" + s.toUTCString()),
    (document.cookie = e + "=" + (t || "") + a + "; path=/");
}
function JobValidateForm() {
  var e = $("#usr_job"),
    t = $("#email_job"),
    a = $("#subject_job"),
    s = $("#phone_job"),
    r = $("#qualification_job"),
    n = $("#grade_job"),
    i = $("#file_job");
  return "" == document.JobForm.usr_job.value
    ? (e.removeClass("inputSuccess").addClass("animated shake shake-error"),
      setTimeout(function () {
        e.removeClass("animated shake");
      }, 1e3),
      e.focus(),
      !1)
    : "" == document.JobForm.email_job.value
    ? (t.removeClass("inputSuccess").addClass("animated shake shake-error"),
      setTimeout(function () {
        t.removeClass("animated shake");
      }, 1e3),
      t.focus(),
      !1)
    : "" == document.JobForm.subject_job.value
    ? (a.removeClass("inputSuccess").addClass("animated shake shake-error"),
      setTimeout(function () {
        a.removeClass("animated shake");
      }, 1e3),
      a.focus(),
      !1)
    : "" == document.JobForm.phone_job.value
    ? (s.removeClass("inputSuccess").addClass("animated shake shake-error"),
      setTimeout(function () {
        s.removeClass("animated shake");
      }, 1e3),
      s.focus(),
      !1)
    : "" == document.JobForm.qualification_job.value
    ? (r.removeClass("inputSuccess").addClass("animated shake shake-error"),
      setTimeout(function () {
        r.removeClass("animated shake");
      }, 1e3),
      r.focus(),
      !1)
    : "" == document.JobForm.grade_job.value
    ? (n.removeClass("inputSuccess").addClass("animated shake shake-error"),
      setTimeout(function () {
        n.removeClass("animated shake");
      }, 1e3),
      n.focus(),
      !1)
    : void (
        "" == document.JobForm.file_job.value &&
        (i.removeClass("inputSuccess").addClass("animated shake shake-error"),
        setTimeout(function () {
          i.removeClass("animated shake");
        }, 1e3),
        i.focus())
      );
}
!(function (e) {
  "use strict";
  e(function () {
    e("*")
      .on("touchstart", function () {
        e(this).trigger("hover");
      })
      .on("touchend", function () {
        e(this).trigger("hover");
      });
    var t,
      a,
      s = document.getElementById("price-range-filter");
    if (s) {
      noUiSlider.create(s, {
        start: [20, 80],
        connect: !0,
        range: { min: 0, max: 100 },
        format: wNumb({ decimals: 0 }),
      });
      var r = document.getElementById("price-range-min"),
        n = document.getElementById("price-range-max");
      s.noUiSlider.on("update", function (e, t) {
        t ? (n.innerHTML = "$" + e[t]) : (r.innerHTML = "$" + e[t]);
      });
    }
    e(".gallery-wrapper, #gallery-wrapper").length &&
      e(".gallery-wrapper, #gallery-wrapper").magnificPopup({
        type: "image",
        delegate: "a.zoom",
        gallery: { enabled: !0 },
      }),
      e(".popup-youtube").length &&
        e(".popup-youtube").magnificPopup({
          disableOn: 700,
          type: "iframe",
          mainClass: "mfp-fade",
          removalDelay: 160,
          preloader: !1,
          fixedContentPos: !1,
        }),
      e(".loadmore").on("click", "a", function (t) {
        t.preventDefault();
        var a = e(this),
          s = a
            .parents(".courses-list-wrapper")
            .find(".courses-list")
            .find(".courses-item.hidden")
            .slice(0, 2);
        return (
          s.length
            ? (s.animate({ opacity: 0 }),
              s.promise().done(function () {
                s.removeClass("hidden"), s.show().animate({ opacity: 1 }, 1e3);
              }))
            : a.text("No more item to display"),
          !1
        );
      }),
      e("#quantity-holder,#quantity-holder2")
        .on("click", ".quantity-plus", function () {
          var t = e(this)
              .parents(".quantity-holder")
              .find("input.quantity-input"),
            a = parseInt(t.val(), 10);
          e.isNumeric(a) && a > 0 ? ((a += 1), t.val(a)) : t.val(a);
        })
        .on("click", ".quantity-minus", function () {
          var t = e(this)
              .parents(".quantity-holder")
              .find("input.quantity-input"),
            a = parseInt(t.val(), 10);
          e.isNumeric(a) && a >= 2 ? ((a -= 1), t.val(a)) : t.val(1);
        }),
      (a = (function (e, t, a) {
        var s, r;
        if (
          ((function () {
            var t,
              a = {
                lazyClass: "lazyload",
                loadedClass: "lazyloaded",
                loadingClass: "lazyloading",
                preloadClass: "lazypreload",
                errorClass: "lazyerror",
                autosizesClass: "lazyautosizes",
                srcAttr: "data-src",
                srcsetAttr: "data-srcset",
                sizesAttr: "data-sizes",
                minSize: 40,
                customMedia: {},
                init: !0,
                expFactor: 1.5,
                hFac: 0.8,
                loadMode: 2,
                loadHidden: !0,
                ricTimeout: 0,
                throttleDelay: 125,
              };
            for (t in ((r = e.lazySizesConfig || e.lazysizesConfig || {}), a))
              t in r || (r[t] = a[t]);
          })(),
          !t || !t.getElementsByClassName)
        )
          return { init: function () {}, cfg: r, noSupport: !0 };
        var n = t.documentElement,
          i = e.HTMLPictureElement,
          o = "addEventListener",
          l = "getAttribute",
          d = e[o].bind(e),
          c = e.setTimeout,
          u = e.requestAnimationFrame || c,
          m = e.requestIdleCallback,
          f = /^picture$/i,
          p = ["load", "error", "lazyincluded", "_lazyloaded"],
          h = {},
          v = Array.prototype.forEach,
          g = function (e, t) {
            return (
              h[t] || (h[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")),
              h[t].test(e[l]("class") || "") && h[t]
            );
          },
          $ = function (e, t) {
            g(e, t) ||
              e.setAttribute("class", (e[l]("class") || "").trim() + " " + t);
          },
          y = function (e, t) {
            var a;
            (a = g(e, t)) &&
              e.setAttribute("class", (e[l]("class") || "").replace(a, " "));
          },
          C = function (e, t, a) {
            var s = a ? o : "removeEventListener";
            a && C(e, t),
              p.forEach(function (a) {
                e[s](a, t);
              });
          },
          b = function (e, a, r, n, i) {
            var o = t.createEvent("Event");
            return (
              r || (r = {}),
              (r.instance = s),
              o.initEvent(a, !n, !i),
              (o.detail = r),
              e.dispatchEvent(o),
              o
            );
          },
          w = function (t, a) {
            var s;
            !i && (s = e.picturefill || r.pf)
              ? (a &&
                  a.src &&
                  !t[l]("srcset") &&
                  t.setAttribute("srcset", a.src),
                s({ reevaluate: !0, elements: [t] }))
              : a && a.src && (t.src = a.src);
          },
          k = function (e, t) {
            return (getComputedStyle(e, null) || {})[t];
          },
          x = function (e, t, a) {
            for (
              a = a || e.offsetWidth;
              a < r.minSize && t && !e._lazysizesWidth;

            )
              (a = t.offsetWidth), (t = t.parentNode);
            return a;
          },
          I = (function () {
            var e,
              a,
              s = [],
              r = [],
              n = s,
              i = function () {
                var t = n;
                for (n = s.length ? r : s, e = !0, a = !1; t.length; )
                  t.shift()();
                e = !1;
              },
              o = function (s, r) {
                e && !r
                  ? s.apply(this, arguments)
                  : (n.push(s), a || ((a = !0), (t.hidden ? c : u)(i)));
              };
            return (o._lsFlush = i), o;
          })(),
          _ = function (e, t) {
            return t
              ? function () {
                  I(e);
                }
              : function () {
                  var t = this,
                    a = arguments;
                  I(function () {
                    e.apply(t, a);
                  });
                };
          },
          E = function (e) {
            var t,
              s = 0,
              n = r.throttleDelay,
              i = r.ricTimeout,
              o = function () {
                (t = !1), (s = a.now()), e();
              },
              l =
                m && i > 49
                  ? function () {
                      m(o, { timeout: i }),
                        i !== r.ricTimeout && (i = r.ricTimeout);
                    }
                  : _(function () {
                      c(o);
                    }, !0);
            return function (e) {
              var r;
              (e = !0 === e) && (i = 33),
                t ||
                  ((t = !0),
                  (r = n - (a.now() - s)) < 0 && (r = 0),
                  e || r < 9 ? l() : c(l, r));
            };
          },
          S = function (e) {
            var t,
              s,
              r = function () {
                (t = null), e();
              },
              n = function () {
                var e = a.now() - s;
                e < 99 ? c(n, 99 - e) : (m || r)(r);
              };
            return function () {
              (s = a.now()), t || (t = c(n, 99));
            };
          },
          M = (function () {
            var i,
              m,
              p,
              h,
              x,
              M,
              j,
              P,
              z,
              B,
              O,
              N,
              A = /^img$/i,
              F = /^iframe$/i,
              U = "onscroll" in e && !/(gle|ing)bot/.test(navigator.userAgent),
              L = 0,
              q = 0,
              D = -1,
              Q = function (e) {
                q--, (!e || q < 0 || !e.target) && (q = 0);
              },
              H = function (e) {
                return (
                  null == N && (N = "hidden" == k(t.body, "visibility")),
                  N ||
                    !(
                      "hidden" == k(e.parentNode, "visibility") &&
                      "hidden" == k(e, "visibility")
                    )
                );
              },
              W = function (e, a) {
                var s,
                  r = e,
                  i = H(e);
                for (
                  P -= a, O += a, z -= a, B += a;
                  i && (r = r.offsetParent) && r != t.body && r != n;

                )
                  (i = (k(r, "opacity") || 1) > 0) &&
                    "visible" != k(r, "overflow") &&
                    ((s = r.getBoundingClientRect()),
                    (i =
                      B > s.left &&
                      z < s.right &&
                      O > s.top - 1 &&
                      P < s.bottom + 1));
                return i;
              },
              R = function () {
                var e,
                  a,
                  o,
                  d,
                  c,
                  u,
                  f,
                  p,
                  v,
                  g,
                  $,
                  y,
                  C = s.elements;
                if ((h = r.loadMode) && q < 8 && (e = C.length)) {
                  for (a = 0, D++; a < e; a++)
                    if (C[a] && !C[a]._lazyRace)
                      if (!U || (s.prematureUnveil && s.prematureUnveil(C[a])))
                        G(C[a]);
                      else if (
                        (((p = C[a][l]("data-expand")) && (u = 1 * p)) ||
                          (u = L),
                        g ||
                          ((g =
                            !r.expand || r.expand < 1
                              ? n.clientHeight > 500 && n.clientWidth > 500
                                ? 500
                                : 370
                              : r.expand),
                          (s._defEx = g),
                          ($ = g * r.expFactor),
                          (y = r.hFac),
                          (N = null),
                          L < $ && q < 1 && D > 2 && h > 2 && !t.hidden
                            ? ((L = $), (D = 0))
                            : (L = h > 1 && D > 1 && q < 6 ? g : 0)),
                        v !== u &&
                          ((M = innerWidth + u * y),
                          (j = innerHeight + u),
                          (f = -1 * u),
                          (v = u)),
                        (o = C[a].getBoundingClientRect()),
                        (O = o.bottom) >= f &&
                          (P = o.top) <= j &&
                          (B = o.right) >= f * y &&
                          (z = o.left) <= M &&
                          (O || B || z || P) &&
                          (r.loadHidden || H(C[a])) &&
                          ((m && q < 3 && !p && (h < 3 || D < 4)) ||
                            W(C[a], u)))
                      ) {
                        if ((G(C[a]), (c = !0), q > 9)) break;
                      } else
                        !c &&
                          m &&
                          !d &&
                          q < 4 &&
                          D < 4 &&
                          h > 2 &&
                          (i[0] || r.preloadAfterLoad) &&
                          (i[0] ||
                            (!p &&
                              (O ||
                                B ||
                                z ||
                                P ||
                                "auto" != C[a][l](r.sizesAttr)))) &&
                          (d = i[0] || C[a]);
                  d && !c && G(d);
                }
              },
              V = E(R),
              J = function (e) {
                var t = e.target;
                t._lazyCache
                  ? delete t._lazyCache
                  : (Q(e),
                    $(t, r.loadedClass),
                    y(t, r.loadingClass),
                    C(t, K),
                    b(t, "lazyloaded"));
              },
              X = _(J),
              K = function (e) {
                X({ target: e.target });
              },
              Z = function (e) {
                var t,
                  a = e[l](r.srcsetAttr);
                (t = r.customMedia[e[l]("data-media") || e[l]("media")]) &&
                  e.setAttribute("media", t),
                  a && e.setAttribute("srcset", a);
              },
              Y = _(function (e, t, a, s, n) {
                var i, o, d, u, m, h;
                (m = b(e, "lazybeforeunveil", t)).defaultPrevented ||
                  (s &&
                    (a ? $(e, r.autosizesClass) : e.setAttribute("sizes", s)),
                  (o = e[l](r.srcsetAttr)),
                  (i = e[l](r.srcAttr)),
                  n && (u = (d = e.parentNode) && f.test(d.nodeName || "")),
                  (h = t.firesLoad || ("src" in e && (o || i || u))),
                  (m = { target: e }),
                  $(e, r.loadingClass),
                  h && (clearTimeout(p), (p = c(Q, 2500)), C(e, K, !0)),
                  u && v.call(d.getElementsByTagName("source"), Z),
                  o
                    ? e.setAttribute("srcset", o)
                    : i &&
                      !u &&
                      (F.test(e.nodeName)
                        ? (function (e, t) {
                            try {
                              e.contentWindow.location.replace(t);
                            } catch (a) {
                              e.src = t;
                            }
                          })(e, i)
                        : (e.src = i)),
                  n && (o || u) && w(e, { src: i })),
                  e._lazyRace && delete e._lazyRace,
                  y(e, r.lazyClass),
                  I(function () {
                    var t = e.complete && e.naturalWidth > 1;
                    (h && !t) ||
                      (t && $(e, "ls-is-cached"),
                      J(m),
                      (e._lazyCache = !0),
                      c(function () {
                        "_lazyCache" in e && delete e._lazyCache;
                      }, 9)),
                      "lazy" == e.loading && q--;
                  }, !0);
              }),
              G = function (e) {
                if (!e._lazyRace) {
                  var t,
                    a = A.test(e.nodeName),
                    s = a && (e[l](r.sizesAttr) || e[l]("sizes")),
                    n = "auto" == s;
                  ((!n && m) ||
                    !a ||
                    (!e[l]("src") && !e.srcset) ||
                    e.complete ||
                    g(e, r.errorClass) ||
                    !g(e, r.lazyClass)) &&
                    ((t = b(e, "lazyunveilread").detail),
                    n && T.updateElem(e, !0, e.offsetWidth),
                    (e._lazyRace = !0),
                    q++,
                    Y(e, t, n, s, a));
                }
              },
              ee = S(function () {
                (r.loadMode = 3), V();
              }),
              te = function () {
                3 == r.loadMode && (r.loadMode = 2), ee();
              },
              ae = function () {
                if (!m) {
                  if (a.now() - x < 999) return void c(ae, 999);
                  (m = !0), (r.loadMode = 3), V(), d("scroll", te, !0);
                }
              };
            return {
              _: function () {
                (x = a.now()),
                  (s.elements = t.getElementsByClassName(r.lazyClass)),
                  (i = t.getElementsByClassName(
                    r.lazyClass + " " + r.preloadClass
                  )),
                  d("scroll", V, !0),
                  d("resize", V, !0),
                  d("pageshow", function (e) {
                    if (e.persisted) {
                      var a = t.querySelectorAll("." + r.loadingClass);
                      a.length &&
                        a.forEach &&
                        u(function () {
                          a.forEach(function (e) {
                            e.complete && G(e);
                          });
                        });
                    }
                  }),
                  e.MutationObserver
                    ? new MutationObserver(V).observe(n, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0,
                      })
                    : (n[o]("DOMNodeInserted", V, !0),
                      n[o]("DOMAttrModified", V, !0),
                      setInterval(V, 999)),
                  d("hashchange", V, !0),
                  [
                    "focus",
                    "mouseover",
                    "click",
                    "load",
                    "transitionend",
                    "animationend",
                  ].forEach(function (e) {
                    t[o](e, V, !0);
                  }),
                  /d$|^c/.test(t.readyState)
                    ? ae()
                    : (d("load", ae), t[o]("DOMContentLoaded", V), c(ae, 2e4)),
                  s.elements.length ? (R(), I._lsFlush()) : V();
              },
              checkElems: V,
              unveil: G,
              _aLSL: te,
            };
          })(),
          T = (function () {
            var e,
              a = _(function (e, t, a, s) {
                var r, n, i;
                if (
                  ((e._lazysizesWidth = s),
                  (s += "px"),
                  e.setAttribute("sizes", s),
                  f.test(t.nodeName || ""))
                )
                  for (
                    n = 0, i = (r = t.getElementsByTagName("source")).length;
                    n < i;
                    n++
                  )
                    r[n].setAttribute("sizes", s);
                a.detail.dataAttr || w(e, a.detail);
              }),
              s = function (e, t, s) {
                var r,
                  n = e.parentNode;
                n &&
                  ((s = x(e, n, s)),
                  (r = b(e, "lazybeforesizes", { width: s, dataAttr: !!t }))
                    .defaultPrevented ||
                    ((s = r.detail.width) &&
                      s !== e._lazysizesWidth &&
                      a(e, n, r, s)));
              },
              n = S(function () {
                var t,
                  a = e.length;
                if (a) for (t = 0; t < a; t++) s(e[t]);
              });
            return {
              _: function () {
                (e = t.getElementsByClassName(r.autosizesClass)),
                  d("resize", n);
              },
              checkElems: n,
              updateElem: s,
            };
          })(),
          j = function () {
            !j.i && t.getElementsByClassName && ((j.i = !0), T._(), M._());
          };
        return (
          c(function () {
            r.init && j();
          }),
          (s = {
            cfg: r,
            autoSizer: T,
            loader: M,
            init: j,
            uP: w,
            aC: $,
            rC: y,
            hC: g,
            fire: b,
            gW: x,
            rAF: I,
          })
        );
      })((t = "undefined" != typeof window ? window : {}), t.document, Date)),
      (t.lazySizes = a),
      "object" == typeof module && module.exports && (module.exports = a),
      e(document).on("click", "#search-button", function (t) {
        return (
          t.preventDefault(),
          e(this)
            .prev(".search-form")
            .animate(
              {
                width: ["toggle", "swing"],
                height: ["toggle", "swing"],
                opacity: "toggle",
              },
              500,
              "linear"
            ),
          !1
        );
      });
  }),
    e("nav#dropdown").meanmenu({
      siteLogo:
        "<a href='https://assignmenthelppro.com/' class='logo-mobile-menu'><img src='https://www.assignmenthelppro.com/static/images/logo-white.png' /></a>",
    }),
    e.scrollUp({
      scrollText: '<i class="fa fa-arrow-up"></i>',
      easingType: "linear",
      scrollSpeed: 900,
      animation: "fade",
    }),
    e(window).on("load", function () {
      e("#preloader").fadeOut("slow", function () {
        e(this).remove();
      });
      var t = e("#inner-isotope");
      if (t.length > 0) {
        var a = t.find(".isotop-classes-tab a.current").attr("data-filter");
        console.log(a);
        var s = t
          .find(".featuredContainer")
          .isotope({
            filter: a,
            animationOptions: { duration: 750, easing: "linear", queue: !1 },
          });
        t.find(".isotop-classes-tab").on("click", "a", function () {
          var t = e(this);
          t.parent(".isotop-classes-tab").find("a").removeClass("current"),
            t.addClass("current");
          var a = t.attr("data-filter");
          return (
            s.isotope({
              filter: a,
              animationOptions: { duration: 750, easing: "linear", queue: !1 },
            }),
            !1
          );
        });
      }
    });
  var t = e(".about-counter");
  t.length && t.counterUp({ delay: 50, time: 5e3 }),
    e("#checkout-form select.select2").length &&
      e("#checkout-form select.select2").select2({
        theme: "classic",
        dropdownAutoWidth: !0,
        width: "100%",
      });
  var a = e("#ri-grid");
  a.length &&
    a.gridrotator({
      rows: 3,
      columns: 14,
      animType: "random",
      animSpeed: 1e3,
      interval: 600,
      step: 1,
      w1024: { rows: 3, columns: 8 },
      w768: { rows: 3, columns: 6 },
      w480: { rows: 3, columns: 4 },
      w320: { rows: 3, columns: 4 },
      w240: { rows: 3, columns: 4 },
    });
  var s = e("#contact-form");
  s.length &&
    s.validator().on("submit", function (t) {
      var a = e(this),
        r = s.find(".form-response");
      if (!t.isDefaultPrevented())
        return (
          e.ajax({
            url: "vendor/php/form-process.php",
            type: "POST",
            data: s.serialize(),
            beforeSend: function () {
              r.html("<div class='alert alert-info'><p>Loading ...</p></div>");
            },
            success: function (e) {
              "success" === e
                ? (a[0].reset(),
                  r.html(
                    "<div class='alert alert-success'><p><i class='fa fa-check' aria-hidden='true'></i>Message has been sent successfully.</p></div>"
                  ))
                : r.html(
                    "<div class='alert alert-danger'><p>" + e + "</p></div>"
                  );
            },
          }),
          !1
        );
      r.html(
        "<div class='alert alert-danger'><p>Please select all required field.</p></div>"
      );
    });
  var r = e("#question-form");
  r.length &&
    r.validator().on("submit", function (t) {
      var a = e(this),
        s = r.find(".form-response");
      if (!t.isDefaultPrevented())
        return (
          e.ajax({
            url: "vendor/php/question-form-process.php",
            type: "POST",
            data: r.serialize(),
            beforeSend: function () {
              s.html("<div class='alert alert-info'><p>Loading ...</p></div>");
            },
            success: function (e) {
              "success" === e
                ? (a[0].reset(),
                  s.html(
                    "<div class='alert alert-success'><p>Successfully Send.</p></div>"
                  ))
                : s.html(
                    "<div class='alert alert-danger'><p>" + e + "</p></div>"
                  );
            },
          }),
          !1
        );
      s.html(
        "<div class='alert alert-danger'><p>Please select all required field.</p></div>"
      );
    }),
    e(".rc-carousel").each(function () {
      var t = e(this),
        a = t.data("loop"),
        s = t.data("items"),
        r = t.data("margin"),
        n = (t.data("stage-padding"), t.data("autoplay")),
        i = t.data("autoplay-timeout"),
        o = t.data("smart-speed"),
        l = t.data("dots"),
        d = t.data("nav"),
        c = t.data("nav-speed"),
        u = t.data("r-x-small"),
        m = t.data("r-x-small-nav"),
        f = t.data("r-x-small-dots"),
        p = t.data("r-x-medium"),
        h = t.data("r-x-medium-nav"),
        v = t.data("r-x-medium-dots"),
        g = t.data("r-small"),
        $ = t.data("r-small-nav"),
        y = t.data("r-small-dots"),
        C = t.data("r-medium"),
        b = t.data("r-medium-nav"),
        w = t.data("r-medium-dots"),
        k = t.data("r-large"),
        x = t.data("r-large-nav"),
        I = t.data("r-large-dots"),
        _ = t.data("center");
      t.owlCarousel({
        loop: !!a,
        items: s || 4,
        lazyLoad: !0,
        margin: r || 0,
        autoplay: !!n,
        autoplayTimeout: i || 1e3,
        smartSpeed: o || 250,
        dots: !!l,
        nav: !!d,
        navText: [
          "<i class='fa fa-angle-left' aria-hidden='true'></i>",
          "<i class='fa fa-angle-right' aria-hidden='true'></i>",
        ],
        navSpeed: !!c,
        center: !!_,
        responsiveClass: !0,
        responsive: {
          0: { items: u || 1, nav: !!m, dots: !!f },
          480: { items: p || 2, nav: !!h, dots: !!v },
          768: { items: g || 3, nav: !!$, dots: !!y },
          992: { items: C || 5, nav: !!b, dots: !!w },
          1199: { items: k || 6, nav: !!x, dots: !!I },
        },
      });
    }),
    e(window).on("load resize", function () {
      var t = e(window).height();
      e("a.logo-mobile-menu").outerHeight(),
        (t -= 50),
        e(".mean-nav > ul").css("height", t + "px");
    }),
    e(window).on("scroll", function () {
      var t = e("#sticker"),
        a = e(".wrapper"),
        s = (t.outerHeight(), e(window).scrollTop()),
        r = e(window).width(),
        n = t.parent("#header1"),
        i = t.parent("#header2"),
        o = t.parent("#header3"),
        l =
          (o.find(".header-top-area").outerHeight(),
          t.prev(".header-top-area"));
      if (r > 767) {
        a.css("padding-top", "");
        var d,
          c = 0;
        n.length
          ? (d = c = n.find(".main-menu-area").outerHeight())
          : i.length
          ? ((c = i.find(".main-menu-area").outerHeight()),
            (d = l.outerHeight()))
          : o.length &&
            s <= (d = l.outerHeight()) &&
            o.css("top", "-" + s + "px"),
          s >= d
            ? (i.length &&
                (t.addClass("stick"), l.css("margin-bottom", c + "px")),
              o.length && (t.addClass("stick"), o.css("top", "-" + d + "px")))
            : (t.removeClass("stick"), i.length && l.css("margin-bottom", 0));
      }
    }),
    e("#review-form").on(
      "click",
      ".rate-wrapper .rate .rate-item",
      function () {
        var t = e(this),
          a = t.parent(".rate");
        a.addClass("selected"),
          a.find(".rate-item").removeClass("active"),
          t.addClass("active");
      }
    );
  var n = e("#faq-accordian");
  n.on("show.bs.collapse", function (t) {
    n.find(".panel-heading").removeClass("active"),
      e(t.target).parents(".panel").find(".panel-heading").addClass("active"),
      n.find(".panel-collapse.collapse").slideUp("slow", function () {
        e(this).removeClass("in").css("display", "");
      });
  });
  var i = e("#accordion");
  i.find(".panel-collapse").each(function () {
    e(this).hasClass("in") &&
      e(this).parents(".panel").find(".panel-heading").addClass("active");
  }),
    i
      .on("show.bs.collapse", function (t) {
        e(t.target).parents(".panel").find(".panel-heading").addClass("active");
      })
      .on("hide.bs.collapse", function (t) {
        e(t.target)
          .parents(".panel")
          .find(".panel-heading")
          .removeClass("active");
      }),
    e("#login-button").on("click", function (t) {
      t.preventDefault();
      var a = e(this),
        s = a.next("#login-form");
      a.hasClass("open")
        ? (s.slideUp("slow"), a.removeClass("open"))
        : (s.slideDown("slow"), a.addClass("open"));
    }),
    e("#login-form").on("click", ".form-cancel", function (t) {
      t.preventDefault();
      var a = e(this).parents("#login-form"),
        s = a.prev("#login-button");
      a.slideUp("slow"), s.removeClass("open");
    }),
    e("#googleMap").length &&
      google.maps.event.addDomListener(window, "load", function () {
        var e = {
            zoom: 15,
            scrollwheel: !1,
            center: new google.maps.LatLng(-37.81618, 144.95692),
          },
          t = new google.maps.Map(document.getElementById("googleMap"), e);
        new google.maps.Marker({
          position: t.getCenter(),
          animation: google.maps.Animation.BOUNCE,
          icon: "img/map-marker.png",
          map: t,
        });
      });
})(jQuery),
  eval(
    (function (e, t, a, s, r, n) {
      if (
        ((r = function (e) {
          return e.toString(36);
        }),
        !"".replace(/^/, String))
      ) {
        for (; a--; ) n[a.toString(12)] = s[a] || a.toString(12);
        (s = [
          function (e) {
            return n[e];
          },
        ]),
          (r = function () {
            return "\\w+";
          }),
          (a = 1);
      }
      for (; a--; )
        s[a] && (e = e.replace(new RegExp("\\b" + r(a) + "\\b", "g"), s[a]));
      return e;
    })(
      "b a={},9=0,8=0,7,6,5,4,3,2,1;",
      0,
      12,
      "|animating|scale|opacity|left|previous_fs|next_fs|current_fs|fileCount|countFiles|fileUploadList|var".split(
        "|"
      ),
      0,
      {}
    )
  ),
  eval(
    (function (e, t, a, s, r, n) {
      if (
        ((r = function (e) {
          return (
            (e < 62 ? "" : r(parseInt(e / 62))) +
            ((e %= 62) > 35 ? String.fromCharCode(e + 29) : e.toString(36))
          );
        }),
        !"".replace(/^/, String))
      ) {
        for (; a--; ) n[r(a)] = s[a] || r(a);
        (s = [
          function (e) {
            return n[e];
          },
        ]),
          (r = function () {
            return "\\w+";
          }),
          (a = 1);
      }
      for (; a--; )
        s[a] && (e = e.replace(new RegExp("\\b" + r(a) + "\\b", "g"), s[a]));
      return e;
    })(
      'x 1h(6,7,J,D){j 1u,g,1v,m=6.9,P=-1,f="";y((-1!=(P=m.1w("."))&&(f=m.V(P+1).1y()),("15"==f||"1z"==f||"1t"==f||"1A"==f)&&G.L("6 1C 1D"),1E(6.l/k/k)>20&&G.L("R l 1F"),m.1G>25))j r=m.V(0,25);H j r=m;"1r"==D?$("#"+J).Q(\'<3 5="1s" h="M\'+7+\'"><3 5="c-z-12"><p I="\'+6.9+\'"><b>\'+r+"</b> ("+B(6.l/k,10)+\'K)</p></3><3 5="c-z-12"><3 h="n\'+7+\'" 5="n"><3></3></3></3></3>\'):$("#"+J).Q(\'<3 5="6-16" h="M\'+7+\'"><3 5="X"><3 5="c-F-8 c-A-8"><p I="\'+6.9+\'"><b>\'+r+"</b> ("+B(6.l/k,10)+\'K)</p></3><3 5="c-F-4 c-A-4"><3 h="n\'+7+\'" 5="n"><3></3></3></3></3>\'),(g=14 1j());j N=14 1d();g.R.Z("13",x(e){e.1e&&13((e.1g/e.1c)*1i,$("#n"+7))},!1),g.Z("1k",x(){$("#n"+7).S("")},!1),g.1l("1m",1n+"/1o/R.15",!0),N.Q("1J",6),$("#O").1B("1L",!0),$("#O").1S("2c..."),$("#O").29("28","27"),g.26(N),(g.23=x(){y(4==g.22&&1Z==g.Y){j q=g.1X;y((1W("q = "+q),"W"==q.Y)){y("1R"==D)j t=\'<3 5="c-z-11"><p I="\'+6.9+\'"><b>\';H j t=\'<3 5="X"><3 5="c-F-10 c-A-10 T-16"><p 5="6-W-9"><b>\';(t+="1M"==f||"1N"==f?\'<i 5="d d-6-1O-o"></i>\':"1P"==f||"1Q"==f?\'<i 5="d d-6-1T-o"></i>\':\'<i 5="d d-6-T-o"></i>\'),(t+="21"==D?" "+r+"</b> ("+B(6.l/k,10)+\'K) <i 5="d d-1a-19-o"></i> <w v="u" 9="U[]" h="U\'+7+\'" s="2a 2b"></p></3><3 5="c-F-2 c-A-2 T-1p"></3></3><w v="u" h="C\'+7+\'" 9="C[]" s="\'+q.1b+\'"/><w v="u" h="E\'+7+\'" 9="E[]" s="\'+6.9+\'"/>\':" "+r+"</b> ("+B(6.l/k,10)+\'K) <i 5="d d-1a-19-o"></i></p></3><3 5="c-z-1 18"><a 1U="1V:1Y(0);" 24="18(\\\'\'+7+\'\\\')"><i 5="d d-1K"></i></a></3><w v="u" h="C\'+7+\'" 9="C[]" s="\'+q.1b+\'"/><w v="u" h="E\'+7+\'" 9="E[]" s="\'+6.9+\'"/>\'),$("#M"+7).S(t),$("#17").S("1q 1f ("+(17+1)+")")}H G.L("1I 1H 1x 2d 6")}})}',
      0,
      138,
      "|||div||class|file|random||name|||col|fa||fileExt|xhr|id||var|1024|size|fileVal|progressBar|||data|trimFileName|value|output|hidden|type|input|function|if|sm|md|parseInt|fileId|fileUploadOrigin|fileName|xs|console|else|title|fileResultId||log|fileUpload|fd|odrBtn|idx|append|upload|html|text|fileDescription|substr|success|row|status|addEventListener||||progress|new|php|left|fileCount|deleteFile|square|check|filePath|total|FormData|lengthComputable|Uploaded|loaded|uploadFile|100|XMLHttpRequest|load|open|post|domainUrl|orders|right|Files|shareFiles|file_upload_bar|exe|reader|fileInfo|lastIndexOf|uploading|toLowerCase|sh|java|prop|not|supported|parseFloat|error|length|while|problem|testing|trash|disabled|doc|docx|word|xlsx|xls|normal|val|code|href|javascript|eval|responseText|void|200||orderForm|readyState|onreadystatechange|onclick||send|default|cursor|css|Assignment|File|Processing|the".split(
        "|"
      ),
      0,
      {}
    )
  ),
  $(
    void (jQuery.fn.button = function (e) {
      "loading" === e &&
        this.data("loading-text") &&
        this.data("original-text", this.html())
          .html(this.data("loading-text"))
          .prop("disabled", !0),
        "reset" === e &&
          this.data("original-text") &&
          this.html(this.data("original-text")).prop("disabled", !1);
    })
  ),
  $(document).ready(function () {
    firstTimeCall(),
      supportAjaxUploadWithProgress() &&
        configureProgressFile({
          fileId: "files-upload3",
          fileButtonId: "uploadFiles3",
          fileResultId: "fileUpload3",
          fileUploadOrigin: "orderForm",
        });
  }),
  jQuery(".datetimepicker").datetimepicker({
    minDate: 0,
    defaultTime: "23:00",
  }),
  $(document).ready(function () {
    var e = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      prefetch: domainUrl + "/static/subjects.json",
    });
    $("#subject_form").typeahead(
      { hint: !0, highlight: !0, minLength: 1 },
      { name: "subjects", source: e }
    );
  }),
  jQuery(document).ready(function () {
    $(".qtyplus").click(function (e) {
      e.preventDefault(), (fieldName = $(this).attr("field"));
      var t = parseInt($("input[name=" + fieldName + "]").val());
      isNaN(t)
        ? $("input[name=" + fieldName + "]").val(0)
        : $("input[name=" + fieldName + "]").val(t + 1);
    }),
      $(".qtyminus").click(function (e) {
        e.preventDefault(), (fieldName = $(this).attr("field"));
        var t = parseInt($("input[name=" + fieldName + "]").val());
        !isNaN(t) && t > 0
          ? $("input[name=" + fieldName + "]").val(t - 1)
          : $("input[name=" + fieldName + "]").val(0);
      });
  }),
  (window.decpagecount = function (e, t, a, s) {
    var r = document.getElementById(e).value;
    if ("numberonly" == s)
      if (r <= 1)
        (document.getElementById(e).value = 1),
          (document.getElementById(t).value = 250),
          (document.getElementById(a).innerHTML = "250 words");
      else {
        var n = parseInt(r) - 1;
        (document.getElementById(e).value = n),
          (document.getElementById(t).value = parseInt(250 * n)),
          (document.getElementById(a).innerHTML = parseInt(250 * n) + " words");
      }
    return (
      "numbertxt" == s &&
        (document.getElementById(a).value =
          r <= 1
            ? ((document.getElementById(e).value = 1),
              (document.getElementById(t).value = 250),
              "1 Page/250 Words")
            : ((n = parseInt(r) - 1),
              (document.getElementById(e).value = n),
              (document.getElementById(t).value = parseInt(250 * n)),
              1 == n
                ? "1 Page/250 Words"
                : n + " Pages/" + parseInt(250 * n) + " Words")),
      !1
    );
  }),
  (window.incpagecount = function (e, t, a, s) {
    var r = document.getElementById(e).value;
    if ("numberonly" == s)
      if (r < 0)
        (document.getElementById(e).value = 1),
          (document.getElementById(t).value = 250),
          (document.getElementById(a).innerHTML = "250 words");
      else {
        var n = parseInt(r) + 1;
        (document.getElementById(e).value = n),
          (document.getElementById(t).value = parseInt(250 * n)),
          (document.getElementById(a).innerHTML = parseInt(250 * n) + " words");
      }
    return (
      "numbertxt" == s &&
        (document.getElementById(a).value =
          r < 0
            ? ((document.getElementById(e).value = 1),
              (document.getElementById(t).value = 250),
              "1 Page/250 Words")
            : ((n = parseInt(r) + 1),
              (document.getElementById(e).value = n),
              (document.getElementById(t).value = parseInt(250 * n)),
              n + " Pages/" + parseInt(250 * n) + " Words")),
      !1
    );
  }),
  $("#secondLabelFrom").submit(function (e) {
    $(this).attr("id");
    var t = $.trim($("#email_form").val());
    return (
      "" == t || !validateEmail(t) || t.length > 100
        ? ($("#email_form").closest("div").addClass("shake-error"),
          (error1 = !0))
        : ($("#email_form")
            .closest("div")
            .removeClass("shake-error")
            .addClass("inputSuccess"),
          (error1 = !1)),
      "" == $.trim($("#subject_form").val())
        ? ($("#subject_form").closest("div").addClass("shake-error"),
          (error2 = !0))
        : ($("#subject_form")
            .closest("div")
            .removeClass("shake-error")
            .addClass("inputSuccess"),
          (error2 = !1)),
      "" == $("#deadline_form").val()
        ? ($("#deadline_form").closest("div").addClass("shake-error"),
          (error3 = !0))
        : ($("#deadline_form")
            .closest("div")
            .removeClass("shake-error")
            .addClass("inputSuccess"),
          (error3 = !1)),
      1 != error1 && 1 != error2 && 1 != error3
    );
  }),
  $(document).ready(function () {
    $("#textarea_feedback").html("4000 characters remaining"),
      $("#requirements").keyup(function () {
        var e = 4e3 - $("#requirements").val().length;
        $("#textarea_feedback").html(e + " characters remaining");
      });
  }),
  (counter = function () {
    var e = $("textarea#counter-text").val();
    if (0 === e.length)
      return (
        $("span#counter-words").html(0), void $("span#counter-chars").html(0)
      );
    var t = e.trim().replace(/\s+/gi, " ").split(" ").length,
      a = e.length;
    $("span#counter-words").html(t), $("span#counter-chars").html(a);
  }),
  jQuery(document).ready(function (e) {
    e("textarea#counter-text").val(""),
      e("textarea#counter-text").change(counter),
      e("textarea#counter-text").keydown(counter),
      e("textarea#counter-text").keypress(counter),
      e("textarea#counter-text").keyup(counter),
      e("textarea#counter-text").blur(counter),
      e("textarea#counter-text").focus(counter),
      e("input.counter-clear").click(function () {
        e("textarea#counter-text").val(""),
          e("span#counter-words").html(0),
          e("span#counter-chars").html(0),
          e("span.counter-notice").fadeIn(1200).delay(500).fadeOut(1200);
      });
  }),
  $(function () {
    var e = function (e, t) {
      (this.el = e || {}),
        (this.multiple = t || !1),
        this.el
          .find(".panel-heading")
          .on("click", { el: this.el, multiple: this.multiple }, this.dropdown);
    };
    (e.prototype.dropdown = function (e) {
      var t = e.data.el;
      ($this = $(this)),
        ($next = $this.next()),
        $next.slideToggle(),
        $this.parent().toggleClass("open"),
        e.data.multiple ||
          t
            .find(".accordion-content")
            .not($next)
            .slideUp()
            .parent()
            .removeClass("open");
    }),
      new e($(".accordion-container"), !1);
  }),
  $(".forget_pwd").click(function () {
    $(".login_hide").css("display", "none"),
      $(".forget-hide").css("display", "block");
  }),
  $(".back_login").click(function (e) {
    e.preventDefault(),
      $(".login_hide").css("display", "block"),
      $(".forget-hide").css("display", "none"),
      $(".notification_reset_pwd").css("display", "none");
  }),
  $(document).ready(function () {
    $(".jobs_form_sidebar .form-group input").focus(function () {
      (me = $(this)),
        $("label[for='" + me.attr("id") + "']").addClass("animate-label");
    }),
      $(".jobs_form_sidebar .form-group select").focus(function () {
        (me = $(this)),
          $("label[for='" + me.attr("id") + "']").addClass("animate-label");
      }),
      $(".jobs_form_sidebar .form-group input").blur(function () {
        (me = $(this)),
          "" == me.val() &&
            $("label[for='" + me.attr("id") + "']").removeClass(
              "animate-label"
            );
      }),
      $(".jobs_form_sidebar .form-group select").blur(function () {
        (me = $(this)),
          "" == me.val() &&
            $("label[for='" + me.attr("id") + "']").removeClass(
              "animate-label"
            );
      });
  }),
  $(".next").click(function () {
    if (animating) return !1;
    (animating = !0),
      (current_fs = $(this).parent()),
      (next_fs = $(this).parent().next()),
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active"),
      next_fs.show(),
      current_fs.animate(
        { opacity: 0 },
        {
          step: function (e, t) {
            (scale = 1 - 0.2 * (1 - e)),
              (left = 50 * e + "%"),
              (opacity = 1 - e),
              current_fs.css({
                transform: "scale(" + scale + ")",
                position: "relative",
              }),
              next_fs.css({ left: left, opacity: opacity });
          },
          duration: 800,
          complete: function () {
            current_fs.hide(), (animating = !1);
          },
          easing: "easeInOutBack",
        }
      );
  }),
  $(".previous").click(function () {
    if (animating) return !1;
    (animating = !0),
      (current_fs = $(this).parent()),
      (previous_fs = $(this).parent().prev()),
      $("#progressbar li")
        .eq($("fieldset").index(current_fs))
        .removeClass("active"),
      previous_fs.show(),
      current_fs.animate(
        { opacity: 0 },
        {
          step: function (e, t) {
            (scale = 0.8 + 0.2 * (1 - e)),
              (left = 50 * (1 - e) + "%"),
              (opacity = 1 - e),
              current_fs.css({ left: left }),
              previous_fs.css({
                transform: "scale(" + scale + ")",
                opacity: opacity,
              });
          },
          duration: 800,
          complete: function () {
            current_fs.hide(), (animating = !1);
          },
          easing: "easeInOutBack",
        }
      );
  }),
  $(".submit").click(function () {
    return !1;
  }),
  (jQuery.easing.jswing = jQuery.easing.swing),
  jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, t, a, s, r) {
      return jQuery.easing[jQuery.easing.def](e, t, a, s, r);
    },
    easeInQuad: function (e, t, a, s, r) {
      return s * (t /= r) * t + a;
    },
    easeOutQuad: function (e, t, a, s, r) {
      return -s * (t /= r) * (t - 2) + a;
    },
    easeInOutQuad: function (e, t, a, s, r) {
      return (t /= r / 2) < 1
        ? (s / 2) * t * t + a
        : (-s / 2) * (--t * (t - 2) - 1) + a;
    },
    easeInCubic: function (e, t, a, s, r) {
      return s * (t /= r) * t * t + a;
    },
    easeOutCubic: function (e, t, a, s, r) {
      return s * ((t = t / r - 1) * t * t + 1) + a;
    },
    easeInOutCubic: function (e, t, a, s, r) {
      return (t /= r / 2) < 1
        ? (s / 2) * t * t * t + a
        : (s / 2) * ((t -= 2) * t * t + 2) + a;
    },
    easeInQuart: function (e, t, a, s, r) {
      return s * (t /= r) * t * t * t + a;
    },
    easeOutQuart: function (e, t, a, s, r) {
      return -s * ((t = t / r - 1) * t * t * t - 1) + a;
    },
    easeInOutQuart: function (e, t, a, s, r) {
      return (t /= r / 2) < 1
        ? (s / 2) * t * t * t * t + a
        : (-s / 2) * ((t -= 2) * t * t * t - 2) + a;
    },
    easeInQuint: function (e, t, a, s, r) {
      return s * (t /= r) * t * t * t * t + a;
    },
    easeOutQuint: function (e, t, a, s, r) {
      return s * ((t = t / r - 1) * t * t * t * t + 1) + a;
    },
    easeInOutQuint: function (e, t, a, s, r) {
      return (t /= r / 2) < 1
        ? (s / 2) * t * t * t * t * t + a
        : (s / 2) * ((t -= 2) * t * t * t * t + 2) + a;
    },
    easeInSine: function (e, t, a, s, r) {
      return -s * Math.cos((t / r) * (Math.PI / 2)) + s + a;
    },
    easeOutSine: function (e, t, a, s, r) {
      return s * Math.sin((t / r) * (Math.PI / 2)) + a;
    },
    easeInOutSine: function (e, t, a, s, r) {
      return (-s / 2) * (Math.cos((Math.PI * t) / r) - 1) + a;
    },
    easeInExpo: function (e, t, a, s, r) {
      return 0 == t ? a : s * Math.pow(2, 10 * (t / r - 1)) + a;
    },
    easeOutExpo: function (e, t, a, s, r) {
      return t == r ? a + s : s * (1 - Math.pow(2, (-10 * t) / r)) + a;
    },
    easeInOutExpo: function (e, t, a, s, r) {
      return 0 == t
        ? a
        : t == r
        ? a + s
        : (t /= r / 2) < 1
        ? (s / 2) * Math.pow(2, 10 * (t - 1)) + a
        : (s / 2) * (2 - Math.pow(2, -10 * --t)) + a;
    },
    easeInCirc: function (e, t, a, s, r) {
      return -s * (Math.sqrt(1 - (t /= r) * t) - 1) + a;
    },
    easeOutCirc: function (e, t, a, s, r) {
      return s * Math.sqrt(1 - (t = t / r - 1) * t) + a;
    },
    easeInOutCirc: function (e, t, a, s, r) {
      return (t /= r / 2) < 1
        ? (-s / 2) * (Math.sqrt(1 - t * t) - 1) + a
        : (s / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + a;
    },
    easeInElastic: function (e, t, a, s, r) {
      var n = 1.70158,
        i = 0,
        o = s;
      return 0 == t
        ? a
        : 1 == (t /= r)
        ? a + s
        : (i || (i = 0.3 * r),
          o < Math.abs(s)
            ? ((o = s), (n = i / 4))
            : (n = (i / (2 * Math.PI)) * Math.asin(s / o)),
          -o *
            Math.pow(2, 10 * (t -= 1)) *
            Math.sin(((t * r - n) * (2 * Math.PI)) / i) +
            a);
    },
    easeOutElastic: function (e, t, a, s, r) {
      var n = 1.70158,
        i = 0,
        o = s;
      return 0 == t
        ? a
        : 1 == (t /= r)
        ? a + s
        : (i || (i = 0.3 * r),
          o < Math.abs(s)
            ? ((o = s), (n = i / 4))
            : (n = (i / (2 * Math.PI)) * Math.asin(s / o)),
          o *
            Math.pow(2, -10 * t) *
            Math.sin(((t * r - n) * (2 * Math.PI)) / i) +
            s +
            a);
    },
    easeInOutElastic: function (e, t, a, s, r) {
      var n = 1.70158,
        i = 0,
        o = s;
      return 0 == t
        ? a
        : 2 == (t /= r / 2)
        ? a + s
        : (i || (i = r * (0.3 * 1.5)),
          o < Math.abs(s)
            ? ((o = s), (n = i / 4))
            : (n = (i / (2 * Math.PI)) * Math.asin(s / o)),
          t < 1
            ? o *
                Math.pow(2, 10 * (t -= 1)) *
                Math.sin(((t * r - n) * (2 * Math.PI)) / i) *
                -0.5 +
              a
            : o *
                Math.pow(2, -10 * (t -= 1)) *
                Math.sin(((t * r - n) * (2 * Math.PI)) / i) *
                0.5 +
              s +
              a);
    },
    easeInBack: function (e, t, a, s, r, n) {
      return (
        null == n && (n = 1.70158), s * (t /= r) * t * ((n + 1) * t - n) + a
      );
    },
    easeOutBack: function (e, t, a, s, r, n) {
      return (
        null == n && (n = 1.70158),
        s * ((t = t / r - 1) * t * ((n + 1) * t + n) + 1) + a
      );
    },
    easeInOutBack: function (e, t, a, s, r, n) {
      return (
        null == n && (n = 1.70158),
        (t /= r / 2) < 1
          ? (s / 2) * (t * t * ((1 + (n *= 1.525)) * t - n)) + a
          : (s / 2) * ((t -= 2) * t * ((1 + (n *= 1.525)) * t + n) + 2) + a
      );
    },
    easeInBounce: function (e, t, a, s, r) {
      return s - jQuery.easing.easeOutBounce(e, r - t, 0, s, r) + a;
    },
    easeOutBounce: function (e, t, a, s, r) {
      return (t /= r) < 1 / 2.75
        ? s * (7.5625 * t * t) + a
        : t < 2 / 2.75
        ? s * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + a
        : t < 2.5 / 2.75
        ? s * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + a
        : s * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + a;
    },
    easeInOutBounce: function (e, t, a, s, r) {
      return t < r / 2
        ? 0.5 * jQuery.easing.easeInBounce(e, 2 * t, 0, s, r) + a
        : 0.5 * jQuery.easing.easeOutBounce(e, 2 * t - r, 0, s, r) +
            0.5 * s +
            a;
    },
  });
var i = 1,
  MAX_I_VAL = 6,
  selectedIndex = 0,
  lastStep = null,
  changeBgFunc = function () {
    $(".works-process-section-" + selectedIndex)
      .addClass("active-process")
      .siblings()
      .removeClass("active-process"),
      lastStep && lastStep.css("display", "none"),
      $("#process-mod-svg-" + selectedIndex).css("display", "block"),
      (lastStep = $("#process-mod-svg-" + selectedIndex)),
      ++selectedIndex > MAX_I_VAL && (selectedIndex = 1);
  },
  interval = setInterval(changeBgFunc, 2e3);
for (i = 1; i < 7; i++)
  $(".works-process-section-" + i).on("click", function () {
    $(this).addClass("active-process").siblings().removeClass("active-process"),
      lastStep && lastStep.css("display", "none"),
      $("#process-mod-svg-" + i).css("display", "block"),
      (lastStep = $("#process-mod-svg-" + selectedIndex));
    var e = $(this)
      .attr("id")
      .substr($(this).attr("id").length - 1);
    (selectedIndex = e),
      clearTimeout(interval),
      changeBgFunc(),
      (interval = setInterval(changeBgFunc, 2e3));
  });
function getIndexPopup() {
  popupCokkie("couponCookie") ||
    popupCokkie("couponCookie") ||
    $("#ModalClaim").modal("show");
}
function popupCokkie(e) {
  for (
    var t = e + "=", a = decodeURIComponent(document.cookie).split(";"), s = 0;
    s < a.length;
    s++
  ) {
    for (var r = a[s]; " " == r.charAt(0); ) r = r.substring(1);
    if (0 == r.indexOf(t)) return r.substring(t.length, r.length);
  }
  return "";
}
function sendOfferCode() {
  var e = $("#offerMail"),
    t = $.trim(e.val());
  if ("" == t || !validateEmail(t))
    return (
      $("#offerMail").closest("div").addClass("has-danger shake-error"), !1
    );
  $("#offerMail").closest("div").removeClass("has-danger shake-error"),
    $.ajax({
      type: "POST",
      url: domainUrl + "/subscriberEmail.php",
      data: $.param({ email: t }),
      dataType: "html",
      success: function (e) {
        "success" == $.trim(e)
          ? ($("#ModalClaim").modal("toggle"),
            claimFunction("couponCookie", !0))
          : $("#offerMail").closest("div").addClass("has-danger shake-error");
      },
      async: !0,
    });
}
function showLoaderReset() {
  $(".se-pre-con").fadeIn("slow");
  $("body").css("opacity", "0.5");
}
function removeLoaderReset() {
  $(".se-pre-con").fadeIn("fast");
  $("body").css("opacity", "1");
  $(".se-pre-con").css("z-index", "0");
}
function sendForgotPasswordEmail() {
  $("#resetPassword").button("loading");
  var e = $.trim($("#frgtPass").val());
  if ("" == e || !validateEmail(e))
    return $("#frgtPass").closest("div").addClass("has-danger shake-error"), !1;
  $("#frgtPass").closest("div").removeClass("has-danger shake-error"),
    showLoaderReset();
  $.ajax({
    type: "POST",
    url: "/orders/sendFrgtPassword.php",
    data: $.param({ email: e }),
    dataType: "html",
    success: function (e) {
      removeLoaderReset();
      "success" == $.trim(e)
        ? ($(".notification_reset_pwd").css("display", "block"),
          $(".forget-hide").hide(),
          $(".notification_email_err").hide())
        : $(".notification_email_err").html(
            "<div class='notification_reset_error'><h5>Invalid Email Id</h5></div>"
          );
    },
    async: !0,
  });
}
$(document).ready(function () {
  $(".country-submenu a i").click(function () {
    $(".dropdown-menu-city").css("display", "block");
  }),
    $(".country-close").click(function () {
      $(".dropdown-menu-city").css("display", "none");
    });
});
