<form id="form" class="form" action="<?= base_url();?>users" method="get">
	<div class="columns">

		<div class="column">
			<div class="control">
				<span class="has-text-dark is-size-5">Gender: &nbsp; </span>
				<label class="radio">
					<input type="radio" id="gender_m" name="gender" value="male" checked> Male</label>
				<label class="radio">
					<input type="radio" id="gender_f" name="gender" value="female"> Female</label>

			</div>
		</div>


		<div class="column">
			<span class="has-text-dark is-size-4">Country: &nbsp; </span>
			<div class="select">
				<select id="country" name="country">
					<option value="philippines">Philippines</option>
					<option value="united states">United States</option>
					<option value="south korea">South Korea</option>
					<option value="japan">Japan</option>
				</select>
			</div>
		</div>

		<div class="column">
			<input type="submit" class="button is-info">
		</div>
	</div>

</form>

<!--FORM PART -->
