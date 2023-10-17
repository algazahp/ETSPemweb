$.ajax({
  url: "http://159.223.51.203/api/bio",
  success: (results) => {
    console.log(results);
    const variables = results.Search;
    let cards = "";
    variables.forEach((v) => {
      cards += `<div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    ${v.name}
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">
                    ${v.id}
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-calendar fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    });

    $(".cards-container").html(cards);
  },

  error: (err) => {
    console.log(err.responseText);
  },
});
