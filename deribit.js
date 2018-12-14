function calc_equity_usd() {
    equity = parseFloat($("#acs_equity_header [value='portfolio.equity'] .fa-btc").next().text());
    price = parseFloat($("[id='exch_btc_usd_price_index']").text());
    equity_usd  = equity*price;
    return equity_usd.toFixed(2);
}
 
function add_equity_usd_markup() {
    $("#tab_a_s_bf thead tr").prepend('<th><span class="u-line"><class="ng-scope">Equity ($)</span></span></th>');
    $("#tab_a_s_bf tbody tr").prepend('<td id="acs_equity_header"><deribit-currency value="portfolio.equity" currency="\'usd\'" class="ng-isolate-scope"><span ng-class="currency_class" class="ng-scope fa fa-usd"></span><span class="ng-binding">' + calc_equity_usd() + '</span></deribit-currency></td>');
}
function update_equity_usd() {
    $("#acs_equity_header [value='portfolio.equity'] .fa-usd").next().text(calc_equity_usd());
}
 
add_equity_usd_markup()
setInterval(update_equity_usd,1000);
